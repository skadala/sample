const express=require('express')
const cors=require('cors')
const router=express.Router();
const {home,about,registerUser,getUsers,getUserbymail,updateuser,loginuser,removeuser}=require('../controllers/userController')
router.get('/',home)
router.use(cors())
router.get('/about',about)
router.get('/getusers',cors(),getUsers)
router.get('/getuser/:email',getUserbymail)
router.post('/register',registerUser)
router.put('/update',updateuser)
router.post('/login',loginuser)
router.delete('/remove',removeuser)

module.exports=router