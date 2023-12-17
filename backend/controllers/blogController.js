const Blog = require('../models/blogModel')
const fs = require('fs')
const path = require('path')
const postBlog = async (req, res) => {
try {
    const {title,desc,auther} = req.fields
    const {photo}=req.files
    const blogs = await new Blog({...req.fields})

    blogs.photo.data = fs.readFileSync(photo.path)
    blogs.photo.contentType = photo.type

    await blogs.save()
    return res.status(200).json({blogs})
} catch (error) {
    console.error(error)
}

}

module.exports = {postBlog};