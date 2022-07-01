import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import Navbar from "./components/navbar/Navbar";

import "./style.scss";

const App = () => {
  const [board, setBoard] = useState([]);
  const [rowIndex, setRowIndex] = useState(0);
  const [columnIndex, setColumnIndex] = useState(0);
  // board[columnIndex[rowIndex]].value;
  // setBoard((prevBoard) => {})

  const createBoard = () => {
    // array => object
    // mapowanie boarda
    const row = new Array(5).fill({}).map((item, index) => {
      return (item = { id: index, value: "a" });
    });
    const column = new Array(5).fill(row);
    setBoard(column);
  };

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Board board={board} />
      <Keyboard
        rowIndex={rowIndex}
        setRowIndex={setRowIndex}
        setColumnIndex={setColumnIndex}
      />
    </div>
  );
};

export default App;
//rsc
// spread array (...)
// reduce
// object.keys
// object.values
