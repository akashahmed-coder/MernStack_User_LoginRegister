const express = require('express')
const app = express();
const dotenv = require("dotenv")
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())
const cookieparser = require('cookie-parser')
app.use(cookieparser())
const PORT = process.env.PORT
// const cors = require('cors')
// app.use(cors)

app.use(require('./auth'))


app.listen(PORT,()=>{
    console.log(`server is running at localhost ${PORT}`)
})