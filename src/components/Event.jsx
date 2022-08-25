import React from "react";
//  import React from 'react'

export default function Event() {
  const EventHandler = () => {
    alert("good ");
  };

  const EventParam = (x) => {
    alert(x);
  };

  return (
    <div>
      <button onClick={EventHandler}> On Click </button>
      <button
        onClick={() => {
          EventParam("محمد");
        }}
      >
        {" "}
        On Click para{" "}
      </button>
    </div>
  );
}
