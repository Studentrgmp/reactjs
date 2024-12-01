import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Delete = () => {

    let {id}=useParams()

    let navg = useNavigate()

    useEffect(()=>{
        let printdetalis = async () => {
            try {
                let { data } = await axios.delete(`http://localhost:5002/user/${id}`)
                console.log(data);
                navg("/login")
            } catch (error) {
                console.log(error);
            }
        }

        printdetalis()
    },[id])

    return (
        <div>

        </div>
    )
}

export default Delete