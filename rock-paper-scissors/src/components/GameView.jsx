import React, { useState } from "react";
import RockPaperScissors from "../RockPaperScissors";

const GameView = ({ userName, resetGame }) => {
  const [userChoice, setUserChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleGame = () => {
    if (!userChoice) return;

    const game = new RockPaperScissors();
    const cpuChoice = game.getComputerChoice();
    const result = game.determineWinner(userChoice, cpuChoice);

    let newUserScore = userScore;
    let newCpuScore = cpuScore;

    if (result === "win") newUserScore++;
    if (result === "lose") newCpuScore++;

    setUserScore(newUserScore);
    setCpuScore(newCpuScore);
    setGameHistory([
      ...gameHistory,
      `${userName} chose ${userChoice}, CPU chose ${cpuChoice}. ${result.toUpperCase()}!`
    ]);
  };

  return (
    <div id="game-screen">
      <h2>Welcome, {userName}!</h2>
      <div id="score-tally">
        <p id="score">Score: {userScore} - {cpuScore} (CPU)</p>
      </div>

      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection">Select your choice: </label>
          <select
            className="custom-select"
            id="user-selection"
            name="user-selection"
            onChange={(e) => setUserChoice(e.target.value)}
          >
            <option value="">-- Choose --</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
          </select>
        </div>
        <button className="btn btn-success" type="button" onClick={handleGame}>
          Go!
        </button>
      </form>

      <h3>Game History</h3>
      <ul>
        {gameHistory.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>

      <button id="reset-game-button" className="btn btn-danger" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default GameView;
