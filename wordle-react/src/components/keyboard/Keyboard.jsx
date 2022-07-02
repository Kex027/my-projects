import React from "react";
import Key from "./Key";

import "./keyboard.scss";

const Keyboard = ({ rowIndex, setRowIndex, columnIndex, setColumnIndex }) => {
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
      if (rowIndex === 4) {
        setColumnIndex((prevColumnIndex) => ++prevColumnIndex);
        setRowIndex(0);
        // add letter
      }
      return;
    }
    if (text === "Backspace") {
      setRowIndex((prevRowIndex) => --prevRowIndex);
      // delete last letter
      return;
    }
    console.log(rowIndex);
    console.log(columnIndex);
    if (rowIndex === 4) {
      return;
    }
    setRowIndex((prevRowIndex) => ++prevRowIndex);
    console.log(text);
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
