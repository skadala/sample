const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema= new mongoose.Schema(
    {
    username:{type:String,required:true,unique:true,lowercase:true},
    email:{type:String,required:true,unique:true,lowercase:true},
    password:{type:String,required:[true,'password is required'],unique:true,lowercase:true},
    // fisrtname:{type:String,required:true,},
    // lastname:{type:String,required:true,},
     age:{type:Number,required:true},
     location:{type:String,required:true}
},{timestamps:true}
)
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    console.log("pwd",password,this.password)
    return await bcrypt.compare(password, this.password)
    console.log("result",result)
    return result
}
module.exports=mongoose.model('userdata',userSchema)