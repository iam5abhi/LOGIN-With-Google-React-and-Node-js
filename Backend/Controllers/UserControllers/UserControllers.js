const User =require('../../model/UserSchema')
const passport = require('passport')
const { models } = require('mongoose')
const jwt =require('jsonwebtoken')
// const User = require('../../model/UserSchema')
const CLIENT_URL  ="http://localhost:3000/"
const SecretKey ="wbsakjfveshgv@qwhj"

const login =async(req,res,next)=>{
    try{
        const Data =await User.findOne({email:req.user.emails[0].value})  
                if(!Data){
                    console.log("vikas")
                    const NewUser = new User({
                        Name:req.user.displayName,
                        email:req.user.emails[0].value,
                        ProfilePic:req.user.photos[0].value
                        })
                        NewUser.save()
                        console.log(NewUser)
                        let token =jwt.sign({
                            UserId:NewUser.id,
                            Name:NewUser.Name,
                            email:NewUser.email
                        },SecretKey,{expiresIn :'2h'})
                    res.status(201).json({
                        status:'Success',
                        message:'You Have Successfully Logged in',
                        data:NewUser,
                        token:token
                    })  
                }else{
                    let token =jwt.sign({
                        UserId:Data.id,
                        Name:Data.Name,
                        email:Data.email
                    },SecretKey,{expiresIn :'2h'})
                        res.status(201).json({
                            status:'Success',
                            message:'You Have Successfully Logged in',
                            data:Data,
                            token:token
                        })  
                }
           
    }catch(err){
        res
            .status(501)
            .json({
                status:"fail",
                HowToCreateUsreSignup:req.requestTime,
                data:{
                err
                }
            })
    }
}

const logifailed =(req,res,next)=>{
    res.status(401).json({
               sucess: false,
               message:"failure"
           })
}

module.exports.login=login
module.exports.logifailed=logifailed