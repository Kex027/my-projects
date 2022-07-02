import React, { useState, useEffect } from "react";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import Navbar from "./components/navbar/Navbar";

import "./style.scss";

const App = () => {
  const [board, setBoard] = useState({});
  const [rowIndex, setRowIndex] = useState(0);
  const [columnIndex, setColumnIndex] = useState(0);
  // board[columnIndex[rowIndex]].value;
  // setBoard((prevBoard) => {})

  const createBoard = () => {
    // array => object
    // mapowanie boarda
    // const row = new Array(5).fill({}).map((item, index) => {
    //   return (item = { id: index, value: "a" });
    // });
    // const column = new Array(5).fill(row);

    const column = {
      1: { id: 1, value: "" },
      2: { id: 2, value: "" },
      3: { id: 3, value: "" },
      4: { id: 4, value: "" },
      5: { id: 5, value: "" },
    }
    const row = {
      1: { column },
      2: { column },
      3: { column },
      4: { column },
      5: { column },
      6: { column }
    }

    setBoard(row);
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
        columnIndex={columnIndex}
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
