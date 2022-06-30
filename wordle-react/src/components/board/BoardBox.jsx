import React from "react";

import "./board.scss";

const BoardBox = (props) => {
  let text = "";
  return (
    <div>
      <div id={props.id} className="grid-letter">
        {text}{props.text}
      </div>
    </div>
  );
};

export default BoardBox;
