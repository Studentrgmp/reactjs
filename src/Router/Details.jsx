import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'
import Print from './Print'

const Details = () => {
  let [state, setState] = useState(null)

  let printDetalis = async () => {
    try {
      let { data } = await axios.get("http://localhost:5002/user")
      setState(data)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(()=>{
    printDetalis()
  },[])

  return (
    <div>
      <h1>All Details</h1>
      {
        state == null ? <SyncLoader/> : state.map(
          (data)=>{
            return <Print key={data.id} {...data}></Print>
          }
        )
      }
    </div>
  )
}

export default Details