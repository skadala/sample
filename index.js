const express=require("express")
const react=require("react")
const reactdom=require("react-dom")
const app=express()
const path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))

app.get("/wel",(req,res)=>{
    res.send("welcome")
})

// const mydiv=<h1>Hello world</h1>
const root= reactdom.createRoot(document.getElementById("root"))
//  root.render(mydiv)
console.log("react",root)

app.listen(8000,()=>console.log('server started'))