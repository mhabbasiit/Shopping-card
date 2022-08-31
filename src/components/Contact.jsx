import React, { useState } from 'react'


const Contact = () => {
    const [count, setCount] = useState(0)
function add()
{
    setCount(count+1)
}
function neg()
{
    if(count!==0){
    setCount(count-1)}
  
}
    return (
        <>
            <h1>Show Counter: {count}</h1>
            <button onClick={neg}>-</button>
            <button onClick={add}>+</button>
        </>
    )
}

export default Contact