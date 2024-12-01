import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Sample from './Sample'

const Home = () => {
    return (
        <div id='MainHome'>
            <div id='link'>
                <Link to="/login"><img src="https://cdn.pixabay.com/photo/2023/09/12/20/41/ai-generated-8249560_640.png" alt=""  width={100}/></Link>
                <Link to="/login"><button id='but'>Login</button></Link><br />
                <Link to="/"><button id='but'>About Us</button></Link><br/>
                <Link to="/img"><button id='but'>Project</button></Link><br />
                <Link to="/delails"><button id='but'>Details</button></Link><br />
                
            </div>

            <div id='outlet'>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Home