import React from "react";
import BoardBox from "./BoardBox";

import "./board.scss";

const Board = ({board}) => {
  return (
    <div className="board">
      {board.map((column) =>
        column.map((row) => {
          const { id, value } = row;
          return <BoardBox key={id} id={id} text={value} />;
        })
      )}
    </div>
  );
};

export default Board;
