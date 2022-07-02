import React from "react";
import BoardBox from "./BoardBox";

import "./board.scss";

const Board = ({ board }) => {
  return (
    <div className="board">
      {Object.values(board).map((column) =>
        Object.values(column).map((row) =>
          Object.values(row).map((box) => {
            return <BoardBox key={box.id} id={box.id} text={box.value} />;
          })
        )
      )}
    </div>
  );
};

export default Board;

// reduce
// object.keys
// object.values

// {board.map((column) =>
//   column.map((row) => {
//     const { id, value } = row;
//     return <BoardBox key={id} id={id} text={value} />;
//   })
// )}
