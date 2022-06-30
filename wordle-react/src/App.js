import React from "react";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import Navbar from "./components/navbar/Navbar";

import './styl.scss';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Board />
      <Keyboard />
    </div>
  );
};

export default App;
//rsc
