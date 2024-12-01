import React, { useContext, useRef, useState } from 'react'
import { theme, themeContext } from './Theme'

const Container = () => {
  let [toggle, setToggle] = useState(false)

  let [dark, light] = useContext(themeContext)

  let maxRef = useRef()

  let change = () => {
    setToggle(!toggle)
    if (toggle == true) {
      maxRef.current.style.backgroundColor = dark.backgroundColor
    }
    else {
      maxRef.current.style.backgroundColor = light.backgroundColor
    }
  }

  return (
    <div>
      <div id='max' ref={maxRef}>

      </div>
      <button onClick={change}>{toggle ? "light" : "dark"}</button>
    </div>
  )
}

export default Container