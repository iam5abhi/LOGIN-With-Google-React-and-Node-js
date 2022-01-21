const mongoose =require('mongoose')


const AddressSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:Number,
        required:true,
    },
    AlterNativePhoneNumber:{
        type:Number
    },
    email:{
        type:String,
        unique:true
    },
    PaymentMethod:{
        type:String,
        required:true,
        enum:['paypal', 'COD'],
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    City:{
        type:String
    },
    Pincode:{
        type:Number
    },
    Address:{
        type:String
    },
    correspondence_address:{
        type:String
    }
    
})



const Address =new mongoose.model('Address',AddressSchema)



module.exports=Address