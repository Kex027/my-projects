import React from "react";

import "./board.scss";

const BoardBox = ({ text, id, boxClass }) => {
  return (
    <>
      <div id={id} className={`grid-letter ${boxClass}`}>
        {text}
      </div>
    </>
  );
};

export default BoardBox;
