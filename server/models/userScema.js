const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userScema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
    
})
userScema.pre("save",async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,12)
        this.cpassword = await bcrypt.hash(this.cpassword,12)
    }
})
userScema.methods.generateAuthToken = async function (){
    const token = jwt.sign({_id:this.id},process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({token:token})
    this.save();
    return token ;
    
}
const User = mongoose.model('USER',userScema)

module.exports = User