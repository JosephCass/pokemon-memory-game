import { useState } from "react";

export default function Game() {
  let [level, setLevel] = useState(0);

  let levelDifficulty = [4, 6, 8, 10, 12];

  function validateChoice() {
    //check if right
    //check if level finished
    //keep track of choices left
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function renderLevel() {
    let gameArray = [];
    // https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png
    for (let x = 0; x < levelDifficulty[level]; x++) {
      let ranNum = randomIntFromInterval(1, 905);
      if (ranNum >= 100) {
        gameArray.push(
          <button className="pokemon-game-button">
            <img
              picked=""
              key=""
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${ranNum}.png`}
              alt="Pokemon picture"
              className="pokemon-button-img"
            />
          </button>
        );
      } else if (ranNum >= 10) {
        gameArray.push(
          <button className="pokemon-game-button">
            <img
              picked=""
              key=""
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${ranNum}.png`}
              alt="Pokemon picture"
              className="pokemon-button-img"
            />
          </button>
        );
      } else {
        gameArray.push(
          <button className="pokemon-game-button">
            <img
              picked=""
              key=""
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${ranNum}.png`}
              alt="Pokemon picture"
              className="pokemon-button-img"
            />
          </button>
        );
      }
    }
    return gameArray;
  }

  return (
    <div className="game-container">
      <div className="game-heading">
        <h3 className="game-level">{`Pick a pokemon! | Level: ${
          level + 1
        }`}</h3>
        <p className="game-description">
          If you pick the same pokemon twice you loose!
        </p>
      </div>
      <div className="game-logic">
        <div className="pokemon-btn-container">{renderLevel()}</div>
      </div>
    </div>
  );
}
