import React from 'react'

const Player = ({ vid }) => {
    // console.log(vid);

    return (
        <div>
            <video src={vid} controls autoPlay width={1250} height={600}></video>
        </div>
    )
}

export default Player