import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
type FormValues={
  username:string,
  email:string,
  channel:string,
  social:{
    twitter:string,
    facebook:string
  },
  phoneNumbers:string[]
}
let rendercount:number=0
export const YoutubeForm = () => {
  const form =useForm<FormValues>({
    defaultValues:async()=>{
      const resp=await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data=await resp.json()
      return {
        username:'satish',
        email:data.email,
        channel:'',
        social:{
              twitter:'',
              facebook:''
            },
        phoneNumbers:["9885864048",'9550153896']
      }
    }
    // defaultValues:{
    //   username:'satish',
    //   email:'',
    //   channel:'',
    //   social:{
    //     twitter:'',
    //     facebook:''
    //   }
    // }
  })
 
  const {register,control,handleSubmit,formState}=form
  const {errors}=formState
  console.log("form",errors)
 
 const onSubmitFrm=(data:FormValues)=>{
  console.log("Form submitted",data)
   }
   rendercount++
  return (
    <div>
      <h1>Youtube Form{rendercount/2}</h1>
      <form onSubmit={handleSubmit(onSubmitFrm)} noValidate>
        <div className='form-control'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' {...register('username',{required:{value:true,message:'Username is required'}})}/>
        <p className='error'>{errors?.username?.message}</p>
        </div>
        <div className='form-control'>
        <label htmlFor='email'>EMail</label>
        <input type='email' id='email' {...register('email',
        {required:'email required',pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:'not a valid mail'},
        validate:{
          notAdmin:(fieldValue:string)=>{
            return (fieldValue!=='admin123@yupptv.com'||'Enter a different email address')
          }
        }})}/>
        <p className='error'>{errors?.email?.message}</p>
        </div>
        <div className='form-control'>
        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel'  {...register('channel',{required:'Channel Name is required'})}/>
        <p className='error'>{errors?.channel?.message}</p>
        </div>
        <div className='form-control'>
        <label htmlFor='twitter'>Twitter</label>
        <input type='text' id='twitter'  {...register('social.twitter')}/>
        </div>
        <div className='form-control'>
        <label htmlFor='facebook'>facebook</label>
        <input type='text' id='facebook'  {...register('social.facebook')}/>
        </div>
        <div className='form-control'>
        <label htmlFor='primary-phone'>primaryNumber</label>
        <input type='text' id='primary-phone'  {...register('phoneNumbers.0')}/>
        </div>
        <div className='form-control'>
        <label htmlFor='secondary-phone'>secondaryNumber</label>
        <input type='text' id='secondary-phone'  {...register('phoneNumbers.1')}/>
        </div>
        <button>Submit</button>
        </form>
        <DevTool control={control}/></div>
  )
}
