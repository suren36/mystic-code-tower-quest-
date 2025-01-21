import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Controls from "./components/Controls";
import GameoverModel from "./components/GameoverModel";
import PlayerStats from "./components/PlayerStats";
import PlayerNameModal from "./components/PlayerNameModal";

const App = () => {
  // Initialize modal visibility based on whether we have a stored player name
  const [showNameModal, setShowNameModal] = useState(() => {
    return !localStorage.getItem("playerName");
  });

  // Initialize game state with stored player name if available
  const [gameState, setGameState] = useState({
    playerName: localStorage.getItem("playerName") || "Player 1",
    currentFloor: 0,
    floors: [],
    gameOver: false,
    autoPlay: false,
    point: 100,
  });

  const handlePlayerName = (name) => {
    if (name.trim()) {
      localStorage.setItem("playerName", name);
      setGameState({
        ...gameState,
        playerName: name,
      });
      setShowNameModal(false);
    }
  };

  const startGame = (difficulty) => {
    if (gameState.point < 10) {
      alert("Not enough points to start the game!");
      return;
    }

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
      ...gameState,
      currentFloor: 0,
      floors: generateFloors(difficulty),
      gameOver: false,
      autoPlay: false,
      point: gameState.point - 10, // Deduct 10 points
    });
  };

  const handleBorrow = () => {
    setGameState({
      ...gameState,
      point: 100,
    });
  };

  const handleRestart = () => {
    setGameState({
      ...gameState,
      currentFloor: 0,
      floors: [],
      gameOver: false,
      autoPlay: false,
    });
  };

  return (
    <>
      <PlayerNameModal isOpen={showNameModal} onSubmit={handlePlayerName} />

      <div className="App">
        <h1 className="tower-quest">Tower Quest</h1>

        <PlayerStats gameState={gameState} />
        {gameState.point <= 0 ? (
          <div className="borrow-container">
            <h1 className="borrow-title">💸 Uh-oh! You're Broke! 💸</h1>
            <p className="borrow-message">
              Don't worry, even legends hit rock bottom. Want to borrow some
              points to get back in the game?
            </p>
            <button className="borrow-button" onClick={handleBorrow}>
              🤑 Yes, give me the 💰
            </button>
          </div>
        ) : (
          <>
            <Controls startGame={startGame} />
            <GameBoard gameState={gameState} setGameState={setGameState} />
          </>
        )}

        <GameoverModel
          isVisible={gameState.gameOver}
          onRestart={handleRestart}
        />
      </div>
    </>
  );
};

export default App;
