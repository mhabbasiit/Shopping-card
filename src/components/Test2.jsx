import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Test2 = () => {
    //const [first, setFirst] = useState(second)
    const [count, setCount] = useState(0)
    useEffect(() => {
      setTimeout(() => {
        setCount(count=>count+1)
      }, 1000)
    })
    
  return (
    <div>
        <p>{count}</p>
        <button >change background</button></div>
  )
}

export default Test2