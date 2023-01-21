require('dotenv').config();
const express = require("express");
require("./config/config");
const cors = require("cors");
const productRoutes = require('./routes/productRoute');
const subCategoryRoutes = require('./routes/subCategoryRoute');
const categoryRoutes = require('./routes/categoryRoute');
const shippingRoutes = require('./routes/shippingRoute');

const app = express();

const PORT = process.env.PORT || 7000;

//CORS policy
app.use(cors());

//JSON
app.use(express.json())

//load product routes
app.use("/prod",productRoutes)

//load category routes
app.use("/cat",categoryRoutes)

//load subCategory routes
app.use("/subcat",subCategoryRoutes)

//load shipping routes
app.use("/ship",shippingRoutes)

app.listen(PORT,()=>{
  console.log(`server running on ${PORT}`)
});
