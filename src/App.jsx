import "./App.css";
import Greeting from "./Gretting";
import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const changecounter = () => {
    setCounter(counter + 1);
  };
  const returncounter = () => {
    setCounter(counter - 1);
  };
  const setToZero = () => {
    setCounter(0);
  };
  return (
    <>
      <div style={{ backgroundColor: counter < 5 ? "green" : "blue" }}>
        <Greeting
          name="Niek"
          city="München"
          club=" Fc Bayern München"
          food=" Kartoffelgratin"
          brand=" Mercedes"
        />
        <Greeting
          name="Carlos"
          city="Freiham"
          club=" Real Madrid"
          food=" Burger"
          brand=" Bentley"
        />
        <button onClick={changecounter}>click me+1</button>
        <button onClick={returncounter}>click me-1</button>
        <button onClick={setToZero}>Set to Zero</button>
        <p>Counter{counter}</p>
      </div>
    </>
  );
};
export default App;
