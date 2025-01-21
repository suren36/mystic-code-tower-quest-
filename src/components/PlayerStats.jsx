import React from "react";

const PlayerStats = ({ gameState }) => {
  return (
    <div className="player-stats">
      <h2>Player Stats</h2>
      <p>
        <strong>Player Name:</strong> {gameState.playerName}
      </p>
      <p>Points : {gameState.point}</p>
      <p>
        <strong>Current Floor:</strong> {gameState.currentFloor + 1}
      </p>
      <p>
        <strong>Game Status:</strong>{" "}
        {gameState.gameOver ? "Game Over" : "In Progress"}
      </p>
    </div>
  );
};

export default PlayerStats;
