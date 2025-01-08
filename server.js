const express=require('express')
const client = require('./client')
const axios=require('axios').default
const app=express()

app.get('/',async(req,res)=>{
    const cachedvalue=await client.get('todos')
    if(cachedvalue) return res.json(JSON.parse(cachedvalue))

 const {data}=await axios.get('https://jsonplaceholder.typicode.com/todos')
    client.set('todos',JSON.stringify(data))
    client.expire('todos',30)
 return res.json(data)
})


app.listen(9000)