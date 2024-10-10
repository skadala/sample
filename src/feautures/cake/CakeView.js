import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
import { useGetUserDataQuery } from '../../api/apiSlice';
export const CakeView = () => {
    const {data,isLoading}=useGetUserDataQuery()
    
   const numofCakes=useSelector(state=>state.cake.numOfCakes)
   const dispatch=useDispatch()
   console.log("data",useGetUserDataQuery())
  return (
    <div>
        numOfCakes:{numofCakes}
        <div>
        <button onClick={()=>dispatch(ordered())}>Ordered</button>
        <button onClick={()=>dispatch(restocked(10))}>Restocked</button>
        <ul>{data?.map(user=><li>{user.name}</li>)}</ul>
        </div>
    </div>
  )
}
