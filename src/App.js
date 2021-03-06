import React, { useState } from "react";

import "./App.css";

function App() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [background, setBackground] = useState("");
  const [items, setItems] = useState([]);

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleBackgroundChange = (e) => {
    setBackground(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      { width: width, height: height, background: background },
    ]);
  };
  return (
    <div className="App">
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            width: item.width,
            height: item.height,
            backgroundColor: item.background,
          }}
        ></div>
      ))}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label> CSS Test </label>
          <input placeholder="Width" type="text" onChange={handleWidthChange} />
          <input
            placeholder="Heigh"
            type="text"
            onChange={handleHeightChange}
          />
          <input
            placeholder="Background-color"
            type="text"
            onChange={handleBackgroundChange}
          />
        </div>

        <button type="submit" id="submitBtn" className="submitBtn">
          {" "}
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
