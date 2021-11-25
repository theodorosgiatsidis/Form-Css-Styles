import React, { useState } from "react";

function Square() {
  const [color, setColor] = useState("#ffffff");
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  };
  return (
    <div
      className="square"
      onClick={randomizedHex}
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
}
export default Square;
