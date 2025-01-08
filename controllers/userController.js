
  const userdata =require("../models/userModel")
  const loginuser=async(req,res)=>{
    const {username,password}=req.body
   // console.log("registerbody",req.body,req.params)
   //  console.log("name:",name,'email:',email,'username',username,"password",password)
   if (!username && !email) {
    res.status(400).json({status:false,message:'please enter valid username or password'})
}
    var user_login = new userdata({       
       username:username,
       password:password,
   })
    const user = await userdata.findOne({
        username:username
    })
    console.log("user",user)
    // if (!user) {
    //     throw new ApiError(404, "User does not exist")
    // }
   const ispwd=await user.isPasswordCorrect(password)
   console.log('ispwd',ispwd)
//    user_register.save().then((result)=>{ console.log("result",result)})
//    .catch(error=>console.log("error",error))
       
   
      
   res.send("added successfully")
}
 const registerUser=(req,res)=>{
     const {name,email,username,password,age,location}=req.body
    // console.log("registerbody",req.body,req.params)
    //  console.log("name:",name,'email:',email,'username',username,"password",password)
     var user_register = new userdata({
        email:email,
        username:username,
        password:password,
        age:age,
        location:location
    })
    user_register.save().then((result)=>{ console.log("result",result)})
    .catch(error=>console.log("error",error))
        
    
       
    res.send("added successfully")
 }
 const getUsers=async(req,res)=>{
    
   users= await userdata.find()
   console.log("users",users)
   res.status(200).json({success:true,data:users,message:"user data"})
 }
 const getUserbymail=async(req,res)=>{
    console.log('usermail',req.params)
    const {email}=req.params
    user= await userdata.findOne({
        email:email
    })
    console.log("users",user)
     res.status(200).json({success:true,data:user,message:"user ftecghed data"})
  }
  const updateuser=async(req,res)=>{
    console.log('usermail',req.body)
    const {email,age}=req.body
    user= await userdata.findOneAndUpdate({
        email:email
    },{age:age}),{new:true}
    console.log("users",user)
     res.status(200).json({success:true,data:user,message:"user data upadated"})
  }
 const home=(req,res)=>{
    console.log("body",req.body,req.query)
    res.send("welomcome home")
}

const about=(req,res)=>{
    console.log("body",req.body,req.query,req.params)
    res.send("welomcome about")
}
const removeuser=async(req,res)=>{
    console.log("remove",req.body)
const {username}=req.body
const delteteduser=await userdata.deleteOne({
    _id:'660d5360b20b2fb6c750d8a6'
})
console.log("deleted",delteteduser)
}
module.exports={home,about,registerUser,getUsers,getUserbymail,updateuser,loginuser,removeuser}