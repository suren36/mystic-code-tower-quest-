import React from "react";
import Box from "./Box";

const GameBoard = ({ gameState, setGameState }) => {
  const selectBox = (floorIndex, boxIndex) => {
    if (gameState.gameOver || floorIndex !== gameState.currentFloor) return;

    const selectedContent = gameState.floors[floorIndex][boxIndex];
    if (selectedContent === "bomb") {
      setGameState({ ...gameState, gameOver: true }); // Game over
    } else {
      setGameState({
        ...gameState,
        currentFloor: gameState.currentFloor + 1,
      });
    }
  };

  return (
    <div className="game-board">
      {gameState.floors.map((floor, floorIndex) => (
        <div
          key={floorIndex}
          className={`floor ${
            gameState.currentFloor === floorIndex ? "active" : ""
          }`}
        >
          {floor.map((box, boxIndex) => (
            <Box
              key={boxIndex}
              content={box}
              revealed={
                gameState.gameOver || floorIndex < gameState.currentFloor
              }
              onClick={() => selectBox(floorIndex, boxIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
