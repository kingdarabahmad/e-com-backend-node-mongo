const express=require('express');
const { findSubcategories } = require('../controllers/subcategoryController');
const subCategoryRouter=express.Router()

subCategoryRouter.get("/subcategories", findSubcategories);

module.exports=subCategoryRouter