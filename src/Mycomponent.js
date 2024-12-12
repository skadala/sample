import React from 'react'
import { useStore } from './store/store'
function Mycomponent() {
    const {state:{SystemConfig},dispatch}=useStore()
    // console.log("state",SystemConfig)
  return (
    
    <div>Mycomponent</div>
  )
}

export default Mycomponent