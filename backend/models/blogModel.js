const mongoose  = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        type:String
    },
    desc:{
        type:String
    },
    
    photo:{
            data:Buffer,
            contentType:String
        },
        auther:{
            type:String,
            required:true
        },
    },
    {timestamps:true}


)

module.exports = mongoose.model('Blog',blogSchema)