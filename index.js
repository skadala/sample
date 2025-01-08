const  client=require("./client")


const myinit=async()=>{
    // client.set('age',14,'nx')
    // console.log(await client.set('agenew',16,'nx'))
    //  console.log(await client.set('myfriend','gopal','EX',15))
    let myage=await client.get('myfriend')
   
    if(myage==null){
        console.log("nulllfriend")
        await client.set('myfriend','poojita','EX',15)
       let myage=await client.get('myfriend')
      console.log("myfriend",myage)
    }
    console.log("myfriend",myage)
}


myinit()