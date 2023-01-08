const mongoose= require("mongoose")

const subCategorySchema= new mongoose.Schema({
    subCatNo:String,
    title:String,
    products:Array,
    categories:Array
})

const subCategoryModel=mongoose.model('subcategories',subCategorySchema)
module.exports={subCategoryModel}