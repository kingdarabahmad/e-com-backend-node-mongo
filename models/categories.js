const mongoose= require("mongoose")

const categorySchema= new mongoose.Schema({
    catNo:String,
    img:String,
    title:String,
    products:Array, 
    subCategories:Array
})

const categoryModel=mongoose.model('categories',categorySchema)
module.exports={categoryModel}