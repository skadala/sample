
import { useReducer,useContext,useState, createContext } from "react";
import * as actions from './actions'
import { reducer,initialState } from "./reducer";
const GlobalStore=new createContext();

const useStore=()=>{
    return useContext(GlobalStore)
}

const Provider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    return <GlobalStore.Provider value={{state,dispatch}}> 
    {children}
    </GlobalStore.Provider>
}

export {actions,Provider,useStore}