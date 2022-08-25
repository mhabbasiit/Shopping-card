// import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1> Show Conter : {count} </h1>

      <button onClick={() => setCount(count + 1)}> Click Me Plz : </button>
    </div>
  );
};

export default Counter;
