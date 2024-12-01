import React, { createContext } from "react";

export let userContext=createContext()  

let Userprovider =({children})=>{
    return <userContext.Provider value={{name:"ABC",phno:234567}}>
        {children}
    </userContext.Provider>
}
export default Userprovider