import React, { createContext, useState } from 'react'

export const ContextData=createContext();

export const DataOfContext=({children})=>{
    const [loading,setLoading]=useState(true);
    function handleLoading(value){
        setLoading(value);
    }
    return <ContextData.Provider value={{handleLoading,loading}}>{children}</ContextData.Provider>
}
    