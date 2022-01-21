const router = require('express').Router()
const UserController = require('../Controllers/UserControllers/UserControllers')

const passport = require('passport')
const User = require('../model/UserSchema')
const CLIENT_URL  ="http://localhost:3000/"



router
     .route('/login/sucess')
     .get(UserController.login)


router
    .route('/login/failed')
    .get(UserController.logifailed)

 router.get('/logout',(req,res)=>{
    req.session = null;
    req.logout();
    res.redirect("http://localhost:3000/login");
 })

router.get('/google',passport.authenticate('google', { scope: ['profile','email']}))


router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
    })
  );

module.exports =router