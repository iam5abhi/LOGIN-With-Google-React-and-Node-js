const mongoose = require('mongoose')

const SizeSchema = mongoose.Schema({
    ChooseWear:{
        type:String
    },
    Neck:Number,
    Shoulder:Number,
    Chest:Number,
    Arm:Number,
    Wrist:Number,
    Length:Number,
    Width:Number
})


const Sizes =new mongoose.model('Sizes',SizeSchema)


module.exports=Sizes;