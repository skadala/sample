import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice=createApi({
    reducerPath:'apliSlice',
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    tagTypes:['User'],
    keepUnusedDataFor: 600,
    endpoints:(builder)=>({
        getUserData:builder.query({
            query:()=>'users',
            invalidatesTags:['User']
        })
    })
})

export const {useGetUserDataQuery} =apiSlice