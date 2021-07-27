import "./App.css";
import React, { useState } from "react";
import Numbers from "./Comp/Numbers";
import MethodArrow from "./Comp/MethodArrow";

function App() {
  // const [name, setName] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name);
  // };

  // const [color, setColor] = useState("Blue");

  // const handleChange = () => setColor("red");

  // const greet = function (name) {
  //   console.log(`Hello ${name}`);
  // };

  // greet("Greg");

  // const greet = (name) => console.log(`Hello ${name}`);

  // greet("Randy");
  return (
    <div className="App">
      <h4>Arrow Functions</h4>

      <MethodArrow />

      {/* <Numbers /> */}

      {/* <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} type="text" />
        <button type="submit" className="btn btn-success">
          submit
        </button>
      </form> */}

      {/* {color}
      <button onClick={handleChange} className="btn btn-primary">
        Change Color
      </button> */}
    </div>
  );
}

export default App;
