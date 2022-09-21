import React from 'react'
import { useState } from 'react';
import CompA from './CompA';
import CompB from './CompB';

export const TempChage = React.createContext("");

const Index2 = () => {
   const [temp, setTemp] = useState("blue")     
  return ( 
  <>
   <TempChage.Provider value={{temp, setTemp}}>
     <CompA/>
     <CompB/>
    </TempChage.Provider>
  </>
  )
}

export default Index2