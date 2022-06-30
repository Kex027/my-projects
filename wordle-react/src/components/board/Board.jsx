import React from "react";
import BoardBox from "./BoardBox";

import "./board.scss";

const Board = () => {
  // ktory lepszy sposob?
  // let board = {
  //   boardList: [],
  //   boardColumns: 5,
  //   boardRows: 6
  // }
  const board = [];
  const boardColumns = 5;
  const boardRows = 6;
  let pointer = 0;

  for (let i = 0; i < boardColumns * boardRows; i++) {
    if (i === 0) {
      board.push(<BoardBox key={i} id={i} text="b"/>);
      continue;
    }
    board.push(<BoardBox key={i} id={i} text="a"/>);
  }

  return <div className="board">{board}</div>;
};

export default Board;
