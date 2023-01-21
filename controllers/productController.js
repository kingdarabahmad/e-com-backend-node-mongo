const {productModel}=require('../models/products')

// controller to find products based on the type(featured or trending) from db
const productOnType=async (req, res) => {
    let data = await productModel.find({ type: req.query.type });
    res.send(data);
  }

// controller to find product based on the ID provided in the params from the db
const productOnID= async (req, res) => {
    let data = await productModel.find({ _id: req.params.id });
    data = data[0];
    res.send({
      data,
    });
  }

  module.exports={productOnType,productOnID}