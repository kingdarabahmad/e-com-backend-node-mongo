const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-com',()=>{
    console.log("server connected to mongoDB")
})