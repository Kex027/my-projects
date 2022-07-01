import React, {useState} from "react";

import "./board.scss";

const BoardBox = (props) => {
  const [value, setValue] = useState("");
  const changeValue = () => {
    setValue(props.text);
  }

  return (
    <div onClick={changeValue}>
      <div id={props.id} className="grid-letter">
        {value}
      </div>
    </div>
  );
};

export default BoardBox;
