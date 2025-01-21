import React from "react";

const Controls = ({ startGame }) => {
  return (
    <div className="controls">
      <button
        className="game-button normal-button"
        onClick={() => startGame("normal")}
      >
        Normal
      </button>
      <button
        className="game-button medium-button"
        onClick={() => startGame("medium")}
      >
        Medium
      </button>
      <button
        className="game-button hard-button"
        onClick={() => startGame("hard")}
      >
        Hard
      </button>
      <button
        className="game-button impossible-button"
        onClick={() => startGame("impossible")}
      >
        Impossible
      </button>
    </div>
  );
};

export default Controls;
