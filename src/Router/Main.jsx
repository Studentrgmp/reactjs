import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div id='Home'>
                <div id='left'>
                    <h1>Hello,</h1>
                    <h3>We Help You To Boost Your Business</h3>
                    <p id='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quaerat ea ullam at culpa recusandae ex enim aliquid soluta est?</p>
                    <button>Get Started <FaArrowRightLong /></button>
                </div>
                <div id='right'>
                    <img src="img.png" alt="" width={400} height={400} />
                    <Link to="/login"><button>Logout</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Main