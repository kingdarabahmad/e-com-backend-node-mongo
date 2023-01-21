const  transporter  = require("../config/emailConfig")
const { shippingModel } = require("../models/shippingDetails")

const sendEmail=async(req,res)=>{
    //destructure the req object
    const {name,email,address,phoneNo,cart}=req.body
    const cartItems=cart.map((item)=>(
        `<h6>${item.title}---------${item.quantity} X ₹ ${item.price}<h6>`
    )).join(" ")

    const findTotal = () => {
        let total = 0;
        cart?.forEach((item) => {
          total += item.quantity * item.price;
        });
        return total.toFixed(2);
      };
    let cartSubTotal=findTotal()
    if(name && email && address && phoneNo && cart.length!==0){
        
        //send email 
        await transporter.sendMail({
            from:process.env.EMAIL_FROM,
            to:`${email}, ${process.env.EMAIL_FROM}`,
            subject:"FASHION-STORE---- ORDER PLACED",
            html:`<h1>Thank you for shopping with us ${name}</h1>
            <h2>Your order details</h2>
            ${cartItems}
            <h3>SUBTOTAL: ₹ ${cartSubTotal}</h3
            <p>Your Order will be deliver at ${address} soon</p>
            `
        })
        res.send({
            "status":"success",
            "message":"Your Order is Confirmed, Confirmation sent to your Email",
        })

    }else{
        res.send({
            "status":"failed",
            "message":"All fields are required or Cart is empty",
        })
    }
}

module.exports={sendEmail}