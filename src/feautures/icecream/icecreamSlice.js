import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfIceCreams:10
}
export const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCreams--
        },
        restocked:(state,action)=>{
            state.numOfIceCreams+=action.payload
        }
    }

})

export default icecreamSlice.reducer
export const {ordered,restocked} =icecreamSlice.actions