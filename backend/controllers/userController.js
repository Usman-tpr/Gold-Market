const User = require('../models/userModel');
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//signup logic

const generateToken = async(id)=>{

 return await jwt.sign({id:id},process.env.SECRET_KEY,{expiresIn:'7d'})
 
}
const signupController = async (req,res)=>{
    // step 1 extracting data from body
    const {name , email , password } = req.body;
  
try {
         //checking error 
         
        
         // checking for empty fields
         if(!name || !email || !password)             { throw Error("Please fill all the fields") }
         //checking for email
         if(!validator.isEmail(email))                { throw Error("please enter a valid email") }
         // checking for already existing email
 const isExistEmail = await User.findOne({email})
         if(isExistEmail)                             {throw Error('this Email Already Loggedin ')}
         // hashing passward
        const hashedPassword = await bcrypt.hash(password,10)
        // generate token
        //storing data in database
        const user = await User.create({name,email,password:hashedPassword});
 
       
         return res.status(200).json({user})
} 

catch (error) {
    return res.status(401).json({ error: error.message });
   
}
}

const loginController = async (req,res)=>{
  try {
    const {email , password,name} = req.body
   
 //checking for empty fields
 if(!email || !password){throw Error("Please fill all the fields")}
 //checking for existing
 const isExist = await User.findOne({email})

 if(!isExist){throw Error('please first signup')}

  //comparing
 const comparing = await bcrypt.compare(password,isExist.password)

 if(!comparing){throw Error('wrong password')}

 //generating token
const token  = jwt.sign({id:isExist._id},process.env.SECRET_KEY,{expiresIn:'7d'})
    return res.status(200).json({token,isExist})

 
 } catch (error) {
    return res.json({error:error.message})
 }
}
// exporting module

module.exports = {signupController , loginController}
