import React, { useState } from "react";
import "./Scoreboard.css";

const Scoreboard = () => {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  const handleWin = (winner) => {
    if (winner === "X") {
      setScores((prevScores) => ({
        ...prevScores,
        player1: prevScores.player1 + 1,
      }));
    } else if (winner === "O") {
      setScores((prevScores) => ({
        ...prevScores,
        player2: prevScores.player2 + 1,
      }));
    }
  };
  return (
    <div>
      <div className="game-container">
        <div className="scoreboard">
          <h2>Scoreboard</h2>
          <div className="player">
            <input
              type="text"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
            />
            <span>Score: {scores.player1}</span>
          </div>
          <div className="player">
            <input
              type="text"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
            />
            <span>Score: {scores.player2}</span>
          </div>
        </div>
        <p>{handleWin}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
