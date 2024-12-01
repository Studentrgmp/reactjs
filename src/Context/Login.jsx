import React, { Fragment } from 'react'
import { userContext } from './UserContext'

const Login = () => {
    return (
        <div>
            <userContext.Consumer>
                {
                    ({name})=>{
                        return <Fragment>
                            <h1>{name}</h1>
                        </Fragment>
                    }
                }

            </userContext.Consumer>

        </div>
    )
}

export default Login