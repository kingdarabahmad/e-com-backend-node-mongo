const mongoose= require('mongoose')

mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log("server connected to mongoDB")
})