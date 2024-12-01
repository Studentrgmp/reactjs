import React from 'react'
import { CiSearch } from "react-icons/ci";
import { TfiAlignJustify } from "react-icons/tfi";

const Nav = () => {
  return (
    <div>
      <nav>
        <TfiAlignJustify size={20} />
        <div id="icon">
          <img src="./yt.png" alt="" width={65} height={65} />
          <h1>YouTube</h1>
        </div>
        <div id="home">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICE</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </div>
      </nav>


    </div>
  )
}

export default Nav