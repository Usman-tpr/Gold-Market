const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    photo:{
        data:Buffer,
        contentType:String
    },
    auther:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Product",productSchema)