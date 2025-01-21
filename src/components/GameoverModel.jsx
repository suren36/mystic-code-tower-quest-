import React from "react";

const GameOverModal = ({ isVisible, onRestart }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Game Over</h2>
        <p>Oh no! You hit a bomb.</p>
        <button onClick={onRestart}>Restart Game</button>
      </div>
    </div>
  );
};

export default GameOverModal;
