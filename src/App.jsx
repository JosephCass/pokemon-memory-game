import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Game from "./components/game";

function App() {
  let [scoreboard, setScore] = useState({ currentScore: 0, topScore: 0 });

  return (
    <div className="App">
      <Header scoreboard={scoreboard} />
      <Game scoreboard={scoreboard} />
    </div>
  );
}

export default App;
