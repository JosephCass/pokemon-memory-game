import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Game from "./components/game";

function App() {
  let [scoreboard, setScore] = useState({ currentScore: 0, topScore: 0 });

  function updateCurrentScore(lost) {
    if (lost) {
      setScore({ ...scoreboard, currentScore: 0 });
    } else {
      setScore({ ...scoreboard, currentScore: scoreboard.currentScore + 1 });
    }
  }

  function updateTopScore() {
    setScore({ ...scoreboard, topScore: scoreboard.currentScore });
  }

  return (
    <div className="App">
      <Header scoreboard={scoreboard} />
      <Game
        scoreboard={scoreboard}
        updateCurrentScore={updateCurrentScore}
        updateTopScore={updateTopScore}
      />
    </div>
  );
}

export default App;
