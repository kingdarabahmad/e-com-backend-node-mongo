const mongoose= require("mongoose")

const productSchema= new mongoose.Schema({
    title:String,
    desc:String,
    img:String,
    img2:String,
    price:Number,
    New:Boolean,
    categories:Array, 
    subCategories:Array,
    type:String
})

const productModel=mongoose.model('products',productSchema)

module.exports={productModel}