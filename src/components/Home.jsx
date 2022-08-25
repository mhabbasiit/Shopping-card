import React from "react";

function Home({ color, back }) {
  const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

  const myElement1 = (
    <>
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>

      {/* <h1 style={{ backgroundColor: props.color }}> Test </h1> */}
      <h1 style={{ backgroundColor: back, color: color }}> Test </h1>
    </>
  );

  return <div>{myElement}</div>;
}

export default Home;
