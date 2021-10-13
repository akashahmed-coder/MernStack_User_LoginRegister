const express = require('express')
const router = express.Router();
require('./db/conn')
const User = require("./models/userScema")
const bcrypt = require('bcryptjs')
// const authentication = require("./middleWare/Authentication")
router.get("/",(req,res)=>{
    res.send("hellow i am home page")
    
})
router.get("/about" ,async(req,res)=>{
    

    try{
       console.log("middleware")
       const token =  JSON.stringify(req.cookies.jwtoken)

      console.log(token)
       const verifyToken = jwt.verify(token,process.env.SECRET_KEY)
       console.log(verifyToken)
       const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token})
       console.log(rootUser)
      if(!rootUser){
         throw new Error("User not Found")
      }
      console.log("hi i am home page")
      res.send(rootUser)
      
    }catch(err){
    res.status(404).send("unauthorized. token not found")
    }
 
})

router.post("/register", async (req,res)=>{

   
    try{
        const {name,email,phone,work,password,cpassword} = req.body
        if( !name || !email || !phone || !work || !password || !cpassword){
            return res.status(422).json({error:"please filled the input field properly"})
        }
        const userExist = await User.findOne({email:email})
        if(userExist){
            res.status(420).json({error:"Email has already present"})
        }
       if(password === cpassword){
        const saveRegister = new User({name,email,phone,work,password,cpassword})
        const saved = await saveRegister.save();
        if(saved){
            res.status(201).json({message:"registration successfull"})
     
        }
       }else{
        res.status(421).json({error:"password doesnot match"})
       }
      
    }catch(err){
      console.log(err)
    }

})

router.post("/signin",async(req,res)=>{
  try{
    const {email,password}= req.body
    if(!email || !password ){
        return res.status(422).json({error:"please filled the input field properly"})
    }
    const UserEmail = await User.findOne({email:email})
   
    if(!UserEmail){
        return res.status(421).json({error:"invalid log in info"})
    }
  
    const isVeryfied = await bcrypt.compare(password,UserEmail.password)
    const token = UserEmail.generateAuthToken()
    console.log(token)
    res.cookie("jwtoken",token,{
        expires: new Date(Date.now() + 25892000000 ),
        httpOnly:true
    })
    
    if(isVeryfied){
        res.status(201).json({message:"Log in successfull"})
    }else{
        return res.status(421).json({error:"ivalid log in info"})
    }
  }catch(error){
      console.log(error)
  }
})

module.exports = router