const mongoose=require('mongoose')

const shippingSchema= new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    phoneNo:String
})

const shippingModel= mongoose.model('shippingdata',shippingSchema)

module.exports={shippingModel}