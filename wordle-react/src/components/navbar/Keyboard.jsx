import React from "react";
import Key from "./Key";

const Keyboard = () => {
  function genAlphabet(charA, charZ) {
    let a = [];
    let i = charA.charCodeAt(0);
    let j = charZ.charCodeAt(0);

    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }

  return (
    <div>
      {genAlphabet("a", "z").map((value, index) => {
        return <Key key={index} text={value} />;
      })}
    </div>
  );
};

export default Keyboard;
