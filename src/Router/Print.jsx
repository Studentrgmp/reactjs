import React, { useEffect, useState } from 'react'
import "./login.css"
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Print = () => {
    let [state, setState] = useState({
        username: "",
        password: "",
    })

    let { username, password } = state

    let { id } = useParams()

    useEffect(()=>{
        let printdetalis = async () => {
            try {
                let { data } = await axios.get(`http://localhost:5001/user/${id}`)
                setState(data)
            } catch (error) {
                console.log(error);
    
            }
        }

        printdetalis()
    },[id])



    let navg = useNavigate()


    // let navi = useNavigate()
    let handleChange = (e) => {

        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let playload = { username, password }
            let { data } = await axios.put(`http://localhost:5002/user/${id}`, playload)
            console.log(data);
            navg("/home")
            // navi("/print")

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            <div id="main">
                <div id="color">
                </div>
                <div id="left">
                    <img id='img' src="https://cdn.pixabay.com/photo/2023/09/12/20/41/ai-generated-8249560_640.png" alt="" width="300px" height="300px" />
                </div>
                <div id="right">
                    <form action="" onSubmit={handleSubmit}>
                        <table >
                            <thead>
                                <tr>
                                    <td><h1 id="logo">CO<span>.</span></h1></td>
                                </tr>
                                <tr>
                                    <td><h1 id="Login">Login your account</h1></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="username">Username</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" name="username" id="username" value={username} required onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="Password">Password</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="password" name="password" id="Password" required onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Link to="/print">Forget Password</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button>Login</button>
                                        {/* <input type="submit" value="Login" id='get' /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td><a href="Sing.htm" id="Create">Create Account</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Print