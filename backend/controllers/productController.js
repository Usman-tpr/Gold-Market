const fs = require('fs');
const slugify = require('slugify')
const Product = require('../models/productModel')

const productController = async (req,res) =>{
  try {
    const {title,desc,price,auther,category} = req.fields
    const {photo}=req.files
     
    const products = await new Product({...req.fields,slug:slugify(title)})

    products.photo.data = fs.readFileSync(photo.path)
    products.photo.contentType = photo.type
    await products.save();

    return res.status(200).json({products})
  } catch (error) {
    return res.status(201).json({message:"error in creating product",error})
  }
}

//get all products

const getProductController = async (req,res) =>{

    try {
        const allProducts = await Product.find({}).select("-photo");

        res.status(200).json({allProducts})

        
    } catch (error) {
        return res.status(401).json({message:"while gitting all products"})
    }
}

const singleProductController = async (req,res) =>{
    try {
        const singleProduct = await Product.findOne({slug:req.params.slug}).select('-photo')
        
        return res.status(200).json({singleProduct})
    } catch (error) {
       console.log(error)
       // return res.status(401).json("error single product")
    }
}
//getting photo
const productPhotoController = async (req,res)=>{

    try {
        const photo = await Product.findById(req.params.pid).select('photo')
        if(photo){
            res.set("Content-Type",photo.photo.contentType)
            return res.status(200).send(photo.photo.data)
        }
    } catch (error) {
       res.status(401).json({message:'error in photo gitting'})
       console.log(error)
    }
}

const deleteProductController = async  (req ,res)=>{
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.pid)
         
        return res.status(200).json({message:"product deleted successfully"})
    } catch (error) {
        return res.status(401).json({message:"error in product deleting",error})
    }
}

const updateProductController = async (req,res) =>{
    try {
        const {name,desc,price} = req.fields
        const {photo}=req.files
         
        const products = await Product.findByIdAndUpdate(req.params.pid,{...req.fields,slug:slugify(name)},{new:true})
    
        products.photo.data = fs.readFileSync(photo.path)
        products.photo.contentType = photo.type
        await products.save();
    
        return res.status(200).json({products})
      } catch (error) {
        return res.status(401).json({message:"error in updating"})
      }
}

const getMyProductController = async (req,res) =>{
       try {
        const token = req.headers.authorization.split(' ')[1]; // Extract the token value after "Bearer"
         const userEmail = token;
         if(userEmail){
           
       const products = await Product.find({auther:userEmail}).select("-photo");
       
       if(!products){ throw Error("no products availaible for this account")}
       
       return res.status(201).json({products})
         }
       } catch (error) {
             res.status(401).json({error:error.message})
       }
}
const categoryViseProducts  = async(req,res)=>{
    try {
        const category = req.params.cid
    const products = await Product.find({category:category}).select("-photo");

    return res.status(201).json({products})
    } catch (error) {
        return res.status(401).json({error})
    }


}

module.exports = {productController , categoryViseProducts, getProductController , getMyProductController,updateProductController,singleProductController, productPhotoController, deleteProductController}