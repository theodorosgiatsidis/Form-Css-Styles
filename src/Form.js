import React, { useState } from "react";

function Form() {
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
    console.log(items);
  };
  return (
    <div>
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

export default Form;
