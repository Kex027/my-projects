import React from "react";
import BoardBox from "./BoardBox";

import "./board.scss";

const Board = ({ board }) => {
  return (
    <div className="board">
      {Object.values(board).map((row) =>
        Object.values(row).map(({ id, value, boxClass }) => {
          // console.log(id);
          return <BoardBox key={id} id={id} text={value} boxClass={boxClass} />;
        })
      )}
    </div>
  );
};

export default Board;
