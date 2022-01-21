const mongoose =require('mongoose')

const UserSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,'User Already exits']
    },
    ProfilePic:{
        type:String,
        required:true
    },
    createdate:{
        type:Date,
        default:Date.now(),
        select:false
    },
    status:{
        type:Boolean,
         default:true,
         select:false
    }
})

const User = new mongoose.model('User',UserSchema)


module.exports=User
