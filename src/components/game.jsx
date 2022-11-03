import { useRef, useState, useEffect } from "react";

export default function Game() {
  let [level, setLevel] = useState(0);

  let [lostGame, setLostState] = useState(false);

  let levelDifficulty = [4, 6, 8, 10, 12];

  let buttonContainer = useRef(null);

  function handleLostGame() {
    setLostState(true);
  }

  function shuffleArray(array) {
    let copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function checkClickedAlready(key) {
    let alreadyClicked = false;
    for (let button of gameButtons) {
      if (button.key === key) {
        alreadyClicked = button.clicked ? true : false;
      }
    }
    return alreadyClicked;
  }

  function checkLevelComplete() {
    let allBtnsClicked = true;
    for (let button of gameButtons) {
      if (!button.clicked) {
        allBtnsClicked = false;
      }
    }
    if (allBtnsClicked) {
      setLevel(level + 1);
    }
  }

  function changeButtonOrder() {
    setGameButtons(shuffleArray(gameButtons));
  }

  function validateChoice(key) {
    let gameBtnArr = [];
    if (checkClickedAlready(key)) {
      handleLostGame();
    } else {
      setGameButtons(
        gameButtons.map((gameButton) => {
          return gameButton.key === key
            ? { ...gameButton, clicked: true }
            : { ...gameButton };
        })
      );
      console.log(gameButtons);
    }
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //   const initialButtons = [];
  function renderLevel() {
    const initialButtons = [];
    for (let x = 0; x < levelDifficulty[level]; x++) {
      const randNum = randomIntFromInterval(1, 905);
      //Implement a check to see if the random number was already choosen before pushng, rare case
      initialButtons.push({ clicked: false, key: randNum });
    }
    return initialButtons;
  }

  const [gameButtons, setGameButtons] = useState(renderLevel());

  function renderGameBtns() {
    return gameButtons.map((currBtn) => {
      if (currBtn.key >= 100) {
        return (
          <button
            data=""
            onClick={() => validateChoice(currBtn.key)}
            className="pokemon-game-button"
            key={`btn-${currBtn.key}`}
          >
            <img
              key={`img-${currBtn.key}`}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${currBtn.key}.png`}
              alt="Pokemon picture"
              className="pokemon-button-img"
            />
          </button>
        );
      } else if (currBtn.key >= 10) {
        return (
          <button
            data=""
            onClick={() => validateChoice(currBtn.key)}
            className="pokemon-game-button"
            key={`btn-${currBtn.key}`}
          >
            <img
              key={`img-${currBtn.key}`}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${currBtn.key}.png`}
              alt="Pokemon picture"
              className="pokemon-button-img"
            />
          </button>
        );
      } else {
        return (
          <button
            data=""
            onClick={() => validateChoice(currBtn.key)}
            className="pokemon-game-button"
            key={`btn-${currBtn.key}`}
          >
            <img
              key={`img-${currBtn.key}`}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${currBtn.key}.png`}
              alt="Pokemon picture"
              className="pokemon-button-img"
            />
          </button>
        );
      }
    });
  }
  useEffect(() => {
    checkLevelComplete();
  }, [gameButtons]);

  useEffect(() => {
    setGameButtons(renderLevel());
  }, [level]);

  return (
    <div className="game-container">
      {!lostGame && (
        <div className="game-heading">
          <h3 className="game-level">{`Pick a pokemon! | Level: ${
            level + 1
          }`}</h3>
          <p className="game-description">
            If you pick the same pokemon twice you loose!
          </p>
        </div>
      )}
      <div className="game-logic">
        {!lostGame ? (
          <div ref={buttonContainer} className="pokemon-btn-container">
            {renderGameBtns()}
          </div>
        ) : (
          <button className="play-again-btn">Play Again</button>
        )}
      </div>
    </div>
  );
}
