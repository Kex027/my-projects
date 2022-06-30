import React from "react";
import "./keyboard.scss";
import enterLetter from "./keyboardScript.js";

const Key = (props) => {
    return <div className="key" onClick={letter => enterLetter(props.text)}>{props.text}</div>;
};

export default Key;
