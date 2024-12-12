import React from 'react'
import { useStore } from './store/store'
function User() {
    const {state:{isloggedin},dispatch}=useStore()
    console.log("user",isloggedin)
  return (
    <div>{isloggedin?"satish":"Guest"}</div>
  )
}

export default User