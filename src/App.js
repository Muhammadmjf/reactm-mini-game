import logo from "./logo.svg";
import "./App.css";
import sign from "./image/the-death-star.ed327467.png";
import coin from "./image/coin-stack-svgrepo-com.svg";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <div></div>
      <div
        style={{
          display: "flex",
          padding: "20px 0 0 20px",
        }}
      >
        <img src={sign} width="20%" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <img src={coin} width="50px" />

        <h4>x {counter}</h4>
      </div>
      <div>
        <h1>{counter}</h1>
        <h3>planets Destroyed</h3>
        <button
          onClick={increment}
          type="button"
          className="btn btn-danger btn-lg"
        >
          <b>Destroy Planet</b>
        </button>
        <p> 1 planet per click</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          height: "50vh",
        }}
      >
        <h1>Available upgrades:</h1>
        <button type="button" className="btn btn-primary btn-lg">
          <b>Increase Superlaser Power</b>
        </button>
        <p>Quadruples planets destroyed per click for 70 Galactic Credits</p>
      </div>
    </div>
  );
}

export default App;
///////
