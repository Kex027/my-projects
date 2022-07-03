import React from "react";
import BoardBox from "./BoardBox";

import "./board.scss";

const Board = ({ board }) => {
  return (
    <div className="board">
      {Object.values(board).map((row) =>
        Object.values(row).map(({ id, value }) => (
          <BoardBox key={id} id={id} text={value} />
        ))
      )}
    </div>
  );
};

export default Board;
