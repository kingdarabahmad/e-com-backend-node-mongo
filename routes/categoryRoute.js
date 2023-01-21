const express=require('express');
const { findCategories, findProductsOnSubCategory } = require('../controllers/categoryController');
const CategoryRouter=express.Router()

CategoryRouter.get("/categories",findCategories );
  
CategoryRouter.get("/categories/:id",findProductsOnSubCategory );
  
module.exports= CategoryRouter