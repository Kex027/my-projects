import React from "react";

import "./board.scss";

const BoardBox = ({ text, id }) => {
  return (
    <div>
      <div id={id} className="grid-letter">
        {text}
      </div>
    </div>
  );
};

export default BoardBox;
