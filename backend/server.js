require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const routes = require ('./routes/userRoute')
const productRoutes = require('./routes/productRoute')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(productRoutes)
const conn = async()=>{
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    app.listen(process.env.PORT,()=>{
        console.log('connected Successfully');
    })
   } catch (error) {
    console.log(error)
   }
}
conn();

