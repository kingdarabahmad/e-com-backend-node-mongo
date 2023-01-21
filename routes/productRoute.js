const express=require('express');
const { productOnType, productOnID } = require('../controllers/productController');
const productRouter=express.Router()


productRouter.get("/products",productOnType );
  
productRouter.get("/products/:id",productOnID );

module.exports=productRouter