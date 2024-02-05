import "./App.css";
import { cars } from "../../Data.js";
import Gallery from "../Gallery/Gallery.js";

import { useState } from "react";

function App() {
  const [carlist, setcars] = useState(cars);
  let [formData, setFormData] = useState({
    model: "",
    vendor: "",
    price: 0,
    imageUrl: "",
  });

  function handleModelChange(e) {
    setFormData({ ...formData, model: e.target.value });
  }

  const handleItemClick = (selectedCar) => {
    setFormData({
      id: selectedCar.id,
      model: selectedCar.model,
      vendor: selectedCar.vendor,
      price: selectedCar.price,
      imageUrl: selectedCar.imageUrl,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: carlist.length + 1,
      model: formData.model,
      vendor: formData.vendor,
      price: parseFloat(formData.price),
      imageUrl: formData.imageUrl,
    };

    carlist.push(newItem);
    setcars(carlist);

    setFormData({
      model: "",
      vendor: "",
      price: 0,
      imageUrl: "",
    });
  };

  function handleUpdate() {
    let indexToUpdate = carlist.findIndex((item) => item.id === formData.id);
    if (indexToUpdate !== -1) {
      carlist[indexToUpdate] = formData;
      setFormData({
        model: "",
        vendor: "",
        price: 0,
        imageUrl: "",
      });
    }
  }

  function sortAlphabet() {
    let current = document.getElementById("sortAz");

    if (current.innerHTML.toLowerCase() === "a-z") {
      const sortedList = [...carlist].sort((a, b) =>
        a.model.localeCompare(b.model)
      );
      setcars(sortedList);
      current.innerHTML = "z-a";
    } else {
      const sortedList = [...carlist].sort((a, b) =>
        b.model.localeCompare(a.model)
      );
      setcars(sortedList);
      current.innerHTML = "a-z";
    }
  }

  function sortPrice() {
    let current = document.getElementById("sortHl");

    if (current.innerHTML.toLowerCase() === "h-l") {
      const list = [...carlist].sort((a, b) => b.price - a.price);
      setcars(list);
      current.innerHTML = "l-h";
    } else {
      const list = [...carlist].sort((a, b) => a.price - b.price);
      setcars(list);
      current.innerHTML = "h-l";
    }
  }

  return (
    <div className="App">
      <div className="car-list">
        <button id="sortHl" onClick={sortPrice}>
          h-l
        </button>
        <button id="sortAz" onClick={sortAlphabet}>
          a-z
        </button>
        <Gallery cars={carlist} onItemClick={handleItemClick}></Gallery>
      </div>
      <div>
        <form style={{ fontSize: "22px" }} onSubmit={handleSubmit}>
          <div>
            <label>Model:</label>
            <input
              className="form-input"
              type="text"
              name="model"
              value={formData.model}
              onChange={handleModelChange}
            />
          </div>
          <div>
            <label>Vendor:</label>
            <input
              className="form-input"
              type="text"
              name="vendor"
              value={formData.vendor}
              onChange={(e) =>
                setFormData({ ...formData, vendor: e.target.value })
              }
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              className="form-input"
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            0
          </div>
          <div>
            <label>ImageUrl:</label>
            <input
              className="form-input"
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
          </div>
          <button type="submit">Add Item</button>
          <button
            type="button"
            onClick={(e) => {
              handleUpdate();
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
