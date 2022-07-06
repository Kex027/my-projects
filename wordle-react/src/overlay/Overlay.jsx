import React from "react";
import OverlayBox from "./OverlayBox";

import "./overlay.scss";

const Overlay = ({ gameResult, resetGame }) => {
  return (
    <div className="overlay">
      <OverlayBox gameResult={gameResult} resetGame={resetGame} />
    </div>
  );
};

export default Overlay;
