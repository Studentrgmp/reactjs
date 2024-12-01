import React from 'react'
import Hoc from './Hoc'

const Hoc2 = (props) => {
  return (
    <div>
        <h1>{props.data.place}</h1>
    </div>
  )
}

export default Hoc(Hoc2)