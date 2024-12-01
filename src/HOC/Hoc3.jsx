import React from 'react'
import Hoc from './Hoc'

const Hoc3 = (props) => {
  return (
    <div>
        <h1>{props.data.company}</h1>
    </div>
  )
}

export default Hoc(Hoc3)