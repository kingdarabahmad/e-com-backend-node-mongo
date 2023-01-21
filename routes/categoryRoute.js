const express=require('express');
const { findCategories, findProductsOnSubCategory } = require('../controllers/categoryController');
const categoryRouter=express.Router()

categoryRouter.get("/categories",findCategories );
  
categoryRouter.get("/categories/:id",findProductsOnSubCategory );
  
module.exports= categoryRouter