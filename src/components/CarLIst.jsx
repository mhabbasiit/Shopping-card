import React, { useState } from "react";
import Car from "./Car";

export default function CarLIst() {
  const [first, setfirst] = useState("");

  const ListCar = [
    { id: 1, brand: "Pride" },
    { id: 2, brand: "206" },
    { id: 3, brand: "Tesla" },
    { id: 4, brand: "207" },
    { id: 5, brand: "Benz" },
    { id: 6, brand: "BMV" },
    { id: 7, brand: "Ford" },
  ];
  return (
    <>
      {ListCar.map((item) => (
        <Car key={item.id} model={item.brand} />
      ))}
    </>
  );
}
