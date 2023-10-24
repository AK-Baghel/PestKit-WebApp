import React, { useState } from 'react'
import { createContext } from 'react'
export const Context = createContext();

function AppContext({ children }) {

  const [data, setdata] = useState(false)
  // const [privateComp, setPrivateComp] = useState("false")

  const loginValid = (valid) => {
    setdata(valid);
  }
  // const privateFunc = (data) => {
  //   privateComp(data)
  // }


  return (
    <Context.Provider value={
      { data, loginValid }
    }>
      {children}
    </Context.Provider>
  )
}

export default AppContext