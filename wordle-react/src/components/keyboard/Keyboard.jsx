import React from "react";
import Key from "./Key";

import "./keyboard.scss";

const Keyboard = ({
  rowIndex,
  setRowIndex,
  columnIndex,
  setColumnIndex,
  setBoard,
  board,
}) => {
  const wordLength = 5;

  const genKeyboardList = () => {
    let kbList = [];
    let pointer = "A".charCodeAt(0);
    let end = "Z".charCodeAt(0);

    for (; pointer <= end; ++pointer) {
      kbList.push(String.fromCharCode(pointer));
    }
    kbList.push("Enter");
    kbList.push("Backspace");
    return kbList;
  };

  const kbList = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "Enter",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Backspace",
  ];

  const onKeyClick = (text) => {
    if (text === "Enter") {
      if (columnIndex - 1 < wordLength) {
        console.log("too little letters");
        return;
      }
      setRowIndex((prevRowIndex) => ++prevRowIndex);
      setColumnIndex(1);
      // add letter
      return;
    }
    if (text === "Backspace") {
      if (columnIndex === 1) {
        return;
      }
      setColumnIndex((prevColumnIndex) => --prevColumnIndex);
      // delete last letter
      return;
    }
    // console.log(board);
    console.log(rowIndex);
    console.log(columnIndex);
    if (columnIndex - 1 === wordLength) {
      return;
    }
    setBoard({
      ...board,
      [rowIndex]: {
        ...board[rowIndex],
        [columnIndex]: { ...board[columnIndex], value: text },
      },
    });
    setColumnIndex((prevColumnIndex) => ++prevColumnIndex);
    // console.log(board[1][1]);
    // console.log(text);
  };

  return (
    <div className="keyboard noselect">
      {kbList.map((text, index) => {
        return (
          <Key
            key={index}
            text={text}
            onClick={(e) => {
              onKeyClick(text);
            }}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
