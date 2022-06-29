import React from "react";

const Board = () => {
  const board = [];
  const boardColumns = 5;
  const boardRows = 6;

  for (let i = 0; i < boardColumns * boardRows; i++) {
    board.push(<div key={i}></div>);
  }

  return <div>{board}</div>;
};

export default Board;
