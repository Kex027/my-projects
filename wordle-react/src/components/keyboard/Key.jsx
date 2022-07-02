import React from "react";

import "./keyboard.scss";

const Key = ({ onClick, text }) => {
  return (
    <div className="key" onClick={onClick}>
      {text}
    </div>
  );
};

export default Key;
