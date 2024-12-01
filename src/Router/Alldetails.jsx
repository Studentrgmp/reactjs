import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'


const Alldetails = ({ username, password, id }) => {

  let [state, setState] = useState(null)


  let printDetalis = async () => {
    try {
      let { data } = await axios.get("http://localhost:5002/user")
      setState(data)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    printDetalis()
  }, [])

  return (
    <div>
      <table cellPadding={10} cellSpacing={3} id='table' border={2}>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete Account</th>
          </tr>
          {
            state == null ? <SyncLoader /> : state.map((data) => {
              return <tr key={data.id}>
                <td>{data.username}</td>
                <td>{data.password}</td>
                <td><Link to={`/print/${data.id}`} id='edit'>edit</Link></td>
                <td><Link to={`/delete/${data.id}`} id='edit'>Delete</Link></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Alldetails