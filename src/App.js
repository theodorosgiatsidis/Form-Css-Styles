import React, { useState, useRef } from "react";

import "./App.css";

function App() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [background, setBackground] = useState("");
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWidth(input1.current.value);
    setHeight(input2.current.value);
    setBackground(input3.current.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label> CSS Test </label>
          <input
            style={{ width: width }}
            placeholder="Width"
            type="text"
            ref={input1}
          />
          <input
            style={{ height: height }}
            placeholder="Heigh"
            type="text"
            ref={input2}
          />
          <input placeholder="Background-color" type="text" ref={input3} />
        </div>

        <button
          style={{ backgroundColor: background }}
          type="submit"
          id="submitBtn"
          className="submitBtn"
        >
          {" "}
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
