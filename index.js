require('dotenv').config();
const express = require("express");
require("./db/config");
const cors = require("cors");
const app = express();
const { productModel } = require("./db/models/products");
const { categoryModel } = require("./db/models/categories");
const { subCategoryModel } = require("./db/models/subCategories");

const PORT = process.env.PORT || 7000;

app.use(cors());

app.get("/subcategories", async (req, res) => {
  let data = await subCategoryModel.find();
  res.send(data);
});

app.get("/products", async (req, res) => {
  console.log(req.query);

  let data = await productModel.find({ type: req.query.type });
  res.send(data);
});

app.get("/products/:id", async (req, res) => {
  let data = await productModel.find({ _id: req.params.id });
  data = data[0];
  res.send({
    data,
  });
});

app.get("/categories", async (req, res) => {
  let catData = await categoryModel.find();
  res.send(catData);
});

app.get("/categories/:id", async (req, res) => {
  let subCatArray = req.query.subcategory.split(",");
  if (subCatArray[0] === "") {
    subCatArray = [];
  }
  const catArray = req.params.id.split(",");

  let data = await categoryModel.find({ catNo: req.params.id });
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
});
app.listen(PORT,()=>{
  console.log(`server running on ${PORT}`)
});
