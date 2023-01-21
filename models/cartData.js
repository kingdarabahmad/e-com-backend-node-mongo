const mongoose=require('mongoose')

const cartSchema= new mongoose.Schema({
    title:String,
    quantity:String,
    price:Number,
})

const cartModel= mongoose.model('cart',cartSchema)

module.exports={cartModel}