import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from '../feautures/cake/cakeSlice';
import icecreamReducer from '../feautures/icecream/icecreamSlice'
import {apiSlice} from "../api/apiSlice";

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        [apiSlice.reducerPath] :apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store