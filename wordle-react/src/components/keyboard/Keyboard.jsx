import React from "react";
import Key from "./Key";

import "./keyboard.scss";

const Keyboard = ({ rowIndex, setRowIndex, setColumnIndex }) => {
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

  return (
    <div className="keyboard noselect">
      {genKeyboardList().map((text, index) => {
        return (
          <Key
            key={index}
            text={text}
            onClick={(e) => {
              if (text === "Enter") {
                return;
              }
              if (text === "Backspace") {
                return;
              }
              setRowIndex((prevRowIndex) => ++prevRowIndex);
            }}
          />
        );
      })}
    </div>
  );
};

export default Keyboard;
