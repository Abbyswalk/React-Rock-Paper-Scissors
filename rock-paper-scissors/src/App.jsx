import React, { useState } from "react";
import "./App.css";
import GameView from "./components/GameView";
import WelcomeView from "./components/WelcomeView";

function App() {
  const [userName, setUserName] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);

  const resetGame = () => {
    setUserName("");
    setIsGameStarted(false);
  };

  return (
    <div className="container">
      <h1 className="mainHeader">Rock Paper Scissors</h1>
      {isGameStarted ? (
        <GameView userName={userName} resetGame={resetGame} />
      ) : (
        <WelcomeView userName={userName} setUserName={setUserName} startGame={() => setIsGameStarted(true)} />
      )}
    </div>
  );
}

export default App;
