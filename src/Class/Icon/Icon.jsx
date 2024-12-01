import React, { Component } from 'react'
import { IoMdContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

export default class Icon extends Component {
  render() {
    return (
      <div id='icon'>
        <IoMdContact size={"30px"} />
        <FaShoppingCart size={"25px"} />
        <IoLocationOutline size={"25px"} />
        <FaSearch size={"20px"} />
      </div>
    )
  }
}
