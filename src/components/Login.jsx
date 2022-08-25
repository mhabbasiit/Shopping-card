import React from "react";

export default function Login({ level }) {
  const messageCode = () => {
    if (level === "Admin") {
      return level + "Welcome Admin ";
    } else {
      return level + "Welcome user";
    }
  };

  return (
    <div>
      ..... <h1>{messageCode}</h1>
    </div>
  );
}
