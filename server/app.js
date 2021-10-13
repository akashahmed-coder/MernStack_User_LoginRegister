const express = require('express')
const app = express();

const cookieparser = require('cookie-parser')
app.use(cookieparser())

const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
require('./db/conn')
const PORT = process.env.PORT

app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(require('./auth'))


app.listen(PORT,()=>{
    console.log(`server is running at localhost ${PORT}`)
})