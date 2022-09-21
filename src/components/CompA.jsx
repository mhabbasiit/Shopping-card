import React from 'react'
import { useContext } from 'react'
import { TempChage } from './Card'

   

const CompA = () => {
  const {count, setCount} = useContext(TempChage)
  return (<>
           <div>{count}</div>
    </>
  )
}

export default CompA