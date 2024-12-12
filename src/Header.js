import React from 'react'
import { useStore,actions } from './store/store'
import User from './User'
function Header() {
   const {state:{SystemConfig,isloggedin},dispatch}=useStore()
   const login=()=>{
    dispatch({type:actions.isloggedin,payload:true})
   }
  return (
    <div><ul style={{display:"flex",flexDirection:"row"}}>
       {SystemConfig.menus.map((menu)=><li  key={menu.id}style={{listStyle:'none',margin:"10px"}}>
            {menu.displayText}
        </li>)}
        </ul>
        <User/>
        {!isloggedin&&<button onClick={login}>Login</button>}</div>
  )
}

export default Header