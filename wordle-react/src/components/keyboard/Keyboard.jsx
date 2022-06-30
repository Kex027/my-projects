import React from "react";
import Key from "./Key";

import "./keyboard.scss";

const Keyboard = () => {
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
      {genKeyboardList().map((value, index) => {
        return <Key key={index} text={value} />;
      })}
    </div>
  );
};

export default Keyboard;
