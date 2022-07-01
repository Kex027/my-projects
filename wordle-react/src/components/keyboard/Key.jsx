import React from "react";
import enterLetter from "./keyboardScript.js";

import "./keyboard.scss";

const Key = (props) => {
    return <div className="key" onClick={letter => enterLetter(props.text)}>{props.text}</div>;
};

export default Key;
