import React from "react";

const PlayerStats = ({ gameState }) => {
  return (
    <div className="player-stats">
      <p>Balance: {gameState.balance}</p>
      <p>Current Floor: {gameState.currentFloor + 1}</p>
      <p>Game Over: {gameState.gameOver ? "Yes" : "No"}</p>
    </div>
  );
};

export default PlayerStats;
