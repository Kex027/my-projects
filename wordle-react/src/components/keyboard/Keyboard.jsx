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
  const wordsList = ["QWERT"];
  const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  // console.log(randomWord);
  const wordLength = 5;
  const firstColumnIndex = 1;

  const kbList = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Enter",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "Backspace",
  ];

  const newBoard = (letter) => {
    return {
      ...board,
      [rowIndex]: {
        ...board[rowIndex],
        [columnIndex]: { ...board[columnIndex][columnIndex], value: letter },
      },
    };
  };

  const checkWord = () => {
    const userWord = Object.values(board[rowIndex]).reduce(
      (word, { value }) => `${word}${value}`,
      ""
    );
    console.log(userWord);
    if (userWord === randomWord) {
      console.log("game over");
      
      return true;
    }
    // check if letter is in word or on good place
    // add classess
    console.log("playing");
    return false;
  };

  const onKeyClick = (text) => {
    console.log(board);
    if (text === "Enter") {
      if (columnIndex - 1 < wordLength) {
        console.log("too little letters");
        return;
      }
      if (checkWord()) {
        return;
      }
      setRowIndex((prevRowIndex) => ++prevRowIndex);
      setColumnIndex(firstColumnIndex);
      return;
    }
    if (text === "Backspace") {
      if (columnIndex === firstColumnIndex) {
        return;
      }
      setColumnIndex(--columnIndex);
      setBoard(newBoard(""));
      return;
    }
    if (columnIndex - 1 === wordLength) {
      return;
    }
    setBoard(newBoard(text));
    setColumnIndex((prevColumnIndex) => ++prevColumnIndex);
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
