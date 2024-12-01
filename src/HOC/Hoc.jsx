import React from 'react'

const Hoc = (Max) => {
  
    let user =()=>{
        return <Max data={{name:"abc",place:"bang",company:"tess"}}></Max>
    }
    return user
}

export default Hoc