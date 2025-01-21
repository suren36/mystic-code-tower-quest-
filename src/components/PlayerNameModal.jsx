import React, { useState } from "react";

const PlayerNameModal = ({ isOpen, onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
      setName(""); // Reset the input after submission
    }
  };

  if (!isOpen) return null;

  return (
    <div className="name-body" style={{}}>
      <div className="name-box" style={{}}>
        <h2 style={{ marginBottom: "20px" }}>Welcome to Tower Quest!</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="playerName"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
              }}
            >
              Please enter your name:
            </label>
            <input
              id="playerName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              autoFocus
              required
              minLength={2}
              maxLength={20}
            />
          </div>
          <button className="start" type="submit" style={{}}>
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlayerNameModal;
