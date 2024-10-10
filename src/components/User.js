import React from 'react'
import {useParams,useSearchParams} from 'react-router-dom';

const User = () => {
    const params=useParams()
    const [searchParams] = useSearchParams();
    // for (const entry of searchParams.entries()) {
    //     console.log(entry);
    //   }
    console.log(Object.fromEntries([...searchParams]))
    console.log("params",params,searchParams)
  return (
    <div>User</div>
  )
}

export default User