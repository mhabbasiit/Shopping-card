import React from 'react'
import { useContext } from 'react'
import { TempChage } from './Index2'


const Comp1 = () => {
const {temp, setTemp} = useContext(TempChage)
  return (
    <div>
        <button onClick={()=>setTemp("blue")}>{temp}</button>
    </div>
  )
}

export default Comp1