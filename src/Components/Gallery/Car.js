import React from "react";

export default function Car({ car, onItemClick }) {
  return (
    <div>
      <div
        className="car"
        onClick={() => {
          onItemClick(car);
        }}
      >
        <img
          style={{ width: "350px", height: "250px" }}
          src={car.imageUrl}
          alt={car.model}
        />
        <div
          style={{
            width: "20%",
            fontSize: "22px",
          }}
        >
          <h1>{car.model}</h1>
          <p>{car.vendor}</p>
          <span>{car.price}$</span>
        </div>
      </div>
    </div>
  );
}
