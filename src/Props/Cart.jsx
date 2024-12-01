import React, { Fragment } from 'react'

const Cart = (props) => {
  return (
    <div>
        {
            props.data1.map((x,y)=>{
                console.log(x);
                console.log(y);
                
                return <Fragment key={y}>
                    <img src={x.thumbnailUrl} alt="" />
                </Fragment>
                
            })
        }
    </div>
  )
}

export default Cart