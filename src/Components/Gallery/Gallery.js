import React from "react";
import Car from "./Car";

export default function List({ cars,onItemClick }) {
  return cars.map((car) => <Car onItemClick={onItemClick} key={car.id} car={car}></Car>);
}