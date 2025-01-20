import React from "react";

const Box = ({ content, revealed, onClick }) => {
  return (
    <div className={`box ${revealed ? content : ""}`} onClick={onClick}>
      {revealed ? (content === "gem" ? "💎" : "💀") : "❓"}
    </div>
  );
};

export default Box;
