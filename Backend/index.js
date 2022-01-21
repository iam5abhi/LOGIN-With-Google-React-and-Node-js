const express =require('express')
const crors =require('cors')
const dbconn =require('./db/db')
const cookieSession = require('cookie-session')
const passportSetup = require("./passport");
const passport = require("passport")
 const authRoutes = require('./router/auth')
 const routes =require('./router/index')
const app  =express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: ["codesoftic"]
    })
  );


app.use(passport.initialize());
app.use(passport.session());


app.use(crors({
    origin: 'http://localhost:3000',
    methods:'GET,POST,PUT,DELETE',
    credentials:true
}))


app.use('/auth',authRoutes)
app.use('/api',routes)

app.listen(5000,()=>{
    console.log("Server Is runnig is 5000")
})