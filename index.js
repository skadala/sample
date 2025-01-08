require('dotenv').config()
const express=require('express')
const userrouter=require('./routes/userRoute')
const connectDb=require('./db/index')
const bodyparser=require('body-parser')
const app=express()


connectDb()
// console.log("port",process.env.MONGODB_URI)
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use('/api/v1',userrouter)
app.listen(process.env.PORT,()=>{
    // console.log(`PORT listening host at`)
})