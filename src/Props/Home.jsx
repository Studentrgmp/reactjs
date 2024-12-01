import React from 'react'

const Home = (props) => {
  console.log(props);
  
  return (
    <div>
      {props.data}
    </div>
  )
}

export default Home