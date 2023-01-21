const {subCategoryModel}=require("../models/subCategories")

//controller that finds all the sub categories from the db
const findSubcategories= async (req, res) => {
    let data = await subCategoryModel.find();
    res.send(data);
  }

module.exports={findSubcategories}