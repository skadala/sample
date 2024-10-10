import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
import { useGetUserDataQuery } from '../../api/apiSlice';
export const IcecreamView = () => {
  const {data,isLoading}=useGetUserDataQuery()
 
    let numOfIcecreams=useSelector(state=>state.icecream.numOfIceCreams)
    const dispatch=useDispatch()
    console.log("data",data,isLoading)
  return (
    <div>
        IcecreamCount:{numOfIcecreams}
        <div>
        <button onClick={()=>dispatch(ordered())}>Ordered</button>
        <button onClick={()=>dispatch(restocked(10))}>Restocked</button>
        </div></div>
  )
}
