import React from "react";

import "./overlay.scss";

const OverlayBox = ({ gameResult, resetGame }) => {
  const text = gameResult.toUpperCase();
  return (
    <div className={gameResult}>
      <h3>{text}</h3>
      <button className="btn" onClick={resetGame}>Play again</button>
    </div>
  );
};

export default OverlayBox;
