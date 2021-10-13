const mongoose = require('mongoose')
 
const DB = process.env.DATABASE
const threat = {useNewUrlParser: true,useUnifiedTopology: true}

mongoose.connect(DB,threat).then(()=>{
    console.log("database connection successfull")
}).catch((e)=>{
    console.log("database connection failed")
})