import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Controls from "./components/Controls";

const App = () => {
  const [gameState, setGameState] = useState({
    currentFloor: 0,
    floors: [],
    gameOver: false,
    autoPlay: false,
  });

  const startGame = (difficulty) => {
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);

    const generateFloors = (difficulty) => {
      const levels = {
        normal: [3, 1],
        medium: [2, 1],
        hard: [1, 2],
        impossible: [1, 3],
      };
      const [gems, bombs] = levels[difficulty];
      return Array.from({ length: 8 }, () =>
        shuffle([...Array(gems).fill("gem"), ...Array(bombs).fill("bomb")])
      );
    };

    setGameState({
      currentFloor: 0,
      floors: generateFloors(difficulty),
      gameOver: false,
      autoPlay: false,
    });
  };

  return (
    <div className="App">
      <h1>Tower Quest</h1>
      <Controls startGame={startGame} />
      <GameBoard gameState={gameState} setGameState={setGameState} />
    </div>
  );
};

export default App;
