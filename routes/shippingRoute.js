const express=require('express')
const { sendEmail } = require('../controllers/sendmailController')
const shippingRouter=express.Router()

shippingRouter.post("/checkout",sendEmail)

module.exports=shippingRouter