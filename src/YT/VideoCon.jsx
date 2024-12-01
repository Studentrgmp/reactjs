import React from 'react'
import PlayerList from './PlayerList'
import Player from './Player'

const VideoCon = ({ state, vid ,handlePlay}) => {
    // console.log(vid);

    return (
        <div>
            <div>
                <article id='dis'>
                    <aside id='vid'>
                        <Player vid={vid}></Player>
                    </aside>

                    {/* --------------------------------------------------------------------------------------------------------------------------------- */}

                    <aside id='List'>
                        {
                            state.map((data) => {
                                return <PlayerList key={data.id} data={data} handlePlay={handlePlay} ></PlayerList>

                            })
                        }
                    </aside>
                </article>
            </div>
        </div>
    )
}

export default VideoCon