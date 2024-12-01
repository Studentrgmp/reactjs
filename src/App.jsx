import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Router/Home'
import Nav from './Router/Nav'
import "./App.css"
import Main from './Router/Main'
import Singup from './Router/singup'
import Img from './Router/Img'
import Details from './Router/Details'
import AboutUs from './Router/AboutUs'
import Sample from './Router/Sample'
import Delete from './Router/Delete'
import Alldetails from './Router/Alldetails'
import Print from './Router/Print'
let router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        
    path: "/",
    element:  <AboutUs/>,
      },
      {
        path: "/login",
        element:<Singup></Singup>
      }, {
        path: "/img",
        element: <Img/>
      },{
        path:"/print/:id",
        element:<Print/>
      },{
        path:"/about",
        element:<AboutUs/>
      },{
        path:"/home",
        element:<Sample/>
      },{
        path:"/delete/:id",
        element:<Delete/>
      },{
        path:"/delails",
        element:<Alldetails/>
      }
    ]
  }
])


const App = () => {
  return (
    <div>
      <div id='body'>
        {/* <Img/> */}
        <RouterProvider router={router} ></RouterProvider>
      </div>
    </div>
  )
}

export default App


