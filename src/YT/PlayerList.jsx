import React from 'react'

const PlayerList = (props) => {
    console.log(props.handlePlay);
    let { thumbnailUrl, title } = props.data

    return (
        <div>
            <div onClick={()=>{props.handlePlay(props.data)}}> 
                <figure>
                    <img src={thumbnailUrl} alt={title} width='350'height='300'/>
                </figure>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default PlayerList