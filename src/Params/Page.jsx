import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {

    let {id}=useParams()
  return (
    <div>
        <h1>this from page {id}</h1>
    </div>
  )
}

export default Page