import React from "react";
import "./App.css";
import Interval from "./components/interval";
import Soma from "./components/soma";
import Sorteio from "./components/sorteio";
import Media from "./components/media";
function App() {
  return (
    <div className="app">
      <h1>Exercicio React-Redux</h1>
      <div className="linha">
        <Interval></Interval>
      </div>
      <div className="linha">
        <Soma />
        <Media />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
