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
  randomWord,
  setShowOverlay,
  setGameResult,
}) => {
  const { word } = randomWord;
  if (word === undefined) {
    console.log("word is undefinded");
    return;
  }
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

  const newBoardText = (letter) => {
    return {
      ...board,
      [rowIndex]: {
        ...board[rowIndex],
        [columnIndex]: { ...board[rowIndex][columnIndex], value: letter },
      },
    };
  };

  const newBoardClasses = (userWord) => {
    // jezeli od razu ustawie boarda to tez dziala:
    // board[rowIndex][key].boxClass = "on-good-place";
    // nawet jesli return jest na updatedBoard
    const updatedBoard = { ...board };
    const keys = Object.keys(board[rowIndex]);
    keys.forEach((key) => {
      for (let i = 0; i < wordLength; i++) {
        if (userWord[key - 1] === word[key - 1]) {
          updatedBoard[rowIndex][key].boxClass = "on-good-place";
        } else if (word.includes(userWord[key - 1])) {
          updatedBoard[rowIndex][key].boxClass = "is-in-word";
        } else {
          updatedBoard[rowIndex][key].boxClass = "bad-letter ";
        }
      }
    });
    return updatedBoard;
  };

  const checkWord = () => {
    const userWord = Object.values(board[rowIndex])
      .reduce((word, { value }) => `${word}${value}`, "")
      .toLowerCase();

    setBoard(newBoardClasses(userWord));

    if (userWord === word.toLowerCase()) {
      console.log("win");
      setShowOverlay(true);
      setGameResult("win");
      return true;
    }
    return false;
  };

  const onKeyClick = (text) => {
    if (text === "Enter") {
      if (columnIndex - 1 < wordLength) {
        console.log("too little letters");
        return;
      }

      if (checkWord()) {
        return;
      }

      if (rowIndex === 6) {
        console.log("lose");
        setShowOverlay(true);
        setGameResult("lose");
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
      setBoard(newBoardText(""));
      return;
    }

    if (columnIndex - 1 === wordLength) {
      return;
    }
    setBoard(newBoardText(text));
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
