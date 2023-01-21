const { categoryModel } = require("../models/categories");
const {productModel}=require('../models/products')

//controller finds all the categories from the db
const findCategories = async (req, res) => {
  let catData = await categoryModel.find();
  res.send(catData);
};

//controller finds products based on subcategory selected from DB
const findProductsOnSubCategory=async (req, res) => {
    //split the whatever comming in subcategory property of query object.it returns an array
  let subCatArray = req.query.subcategory.split(",");

  //if subCatArray first index element is ""(means empty) then make this array=[]
  if (subCatArray[0] === "") {
    subCatArray = [];
  }
  const catArray = req.params.id.split(",");

  let data = await categoryModel.find({ catNo: req.params.id });
  
  // if subCatArray is empty (means no subcategory is selected then do find below)
  if (subCatArray.length === 0) {
    let productsData = await productModel.find({
      $and: [
        { categories: { $in: catArray } },
        { price: { $lte: req.query.price } },
      ],
    });
    res.send({
      data,
      productsData,
    });
  } else {
    let productsData = await productModel.find({
      $and: [
        { categories: { $in: catArray } },
        { subCategories: { $in: subCatArray } },
        { price: { $lte: req.query.price } },
      ],
    });

    res.send({
      data,
      productsData,
    });
  }
};

module.exports={findCategories,findProductsOnSubCategory}