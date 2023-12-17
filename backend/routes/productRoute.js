const express = require('express');
const route = express.Router();
const {productController ,getProductController , categoryViseProducts,singleProductController ,getMyProductController, productPhotoController,updateProductController, deleteProductController} = require('../controllers/productController')
const { postBlog } = require('../controllers/blogController')
const formidable = require("express-formidable")

//addproduct
route.post("/add-product",formidable(),productController)
route.post("/add-blog",formidable(),postBlog)

// get all products

route.get('/all-products',getProductController)

// get single Product

route.get('/all-product/:slug',singleProductController)

// about dashboard
route.get('/profile',getMyProductController)

//getphoto

route.get('/product-photo/:pid',productPhotoController)

// get category vise products
route.get('/category/:cid',categoryViseProducts)

// delete product

route.delete('/product/:pid',deleteProductController)

// update product

route.post ('/product-update/:pid',formidable(), updateProductController)

// dashboard data

module.exports = route