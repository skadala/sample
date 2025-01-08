const mongoose=require('mongoose')
const constants=require('../constants')
console.log("dbname",constants)
module.exports = connectDb=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${constants.DB_NAME}`)
        console.log("conection",connectionInstance.connection.host)
    }
    catch(error){
        console.log("error",error)
    }
}
// module.exports={connectDb}