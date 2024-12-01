import React, { Component, Fragment } from 'react'

export default class Json extends Component {
  render(props) {
    console.log(this.props);
    
    return (
      <div>
            {
                this.props.data.map((x,y)=>{
                    console.log(x);
                    return <Fragment key={y}>
                        {x.title}
                    </Fragment>
                })
            }
      </div>
    )
  }
}
