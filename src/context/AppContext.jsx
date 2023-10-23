import React,{useState} from 'react'
import { createContext } from 'react'
export const Context=createContext();

function AppContext({children}) {

    const [data, setdata] = useState("ankit")
    const [data1, setdata1] = useState("kumar")


  return (
    <Context.Provider value={{data,data1}}>
        {children}
    </Context.Provider>
  )
}

export default AppContext