import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Link to="/">HOME</Link> <br />
        <Link to="/pages/1">Page1</Link> <br />
        <Link to="/pages/2">Page2</Link> <br />
        <Link to="/pages/3">Page3</Link><br />

        <Outlet></Outlet>
    </div>
  )
}

export default Layout