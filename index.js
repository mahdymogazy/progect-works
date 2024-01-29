const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routers/userRoute")
const blogRouter = require("./routers/blogRouter")
const dotenv = require('dotenv')
const buf = Buffer.from('BASIC=basic')
const config =require('dotenv').config()
const path =require('path')
const {fileURLToPath}=require ('url')
 
dotenv.config({ path: path.join(__dirname, './config/.env') })

mongoose.connect(process.env.database)
    .then(() => console.log(process.env.database))
    .catch((error) => console.log(error))

const app = express()

app.get("/", (req, res) => res.send("Hello harsh, sad, cruel world!"))
app.use(express.urlencoded({ extended: false }))
app.use("/users", userRouter)
app.use("/blogs", blogRouter)

app.listen(5000, () => console.log("server is running.."))
