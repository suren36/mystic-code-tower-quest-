import React from "react";

const Controls = ({ startGame }) => {
  return (
    <div className="controls">
      <button onClick={() => startGame("normal")}>Start Normal</button>
      <button onClick={() => startGame("medium")}>Start Medium</button>
      <button onClick={() => startGame("hard")}>Start Hard</button>
      <button onClick={() => startGame("impossible")}>Start Impossible</button>
    </div>
  );
};

export default Controls;
