import React from 'react'

const Nav = (props) => {
  return (
    <div>
      <h1>{props.ob.name}</h1>
      <h1>{props.ob.age}</h1>
    </div>
  )
}

export default Nav