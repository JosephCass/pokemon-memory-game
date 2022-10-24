import pokemonLogo from "../assets/pokemon-logo.svg";

export default function Header(props) {
  let { currentScore, topScore } = props.scoreboard;

  return (
    <div className="header-component">
      <h2 className="header-heading">
        <img className="header-icon" src={pokemonLogo} alt="Pokemon Logo" />
        Memory Game
      </h2>
      <div className="header-scoreboard">
        <p className="scoreboard-curren score">{`Score: ${currentScore}`}</p>
        <p className="scoreboard-top score">{`Top Score: ${topScore}`}</p>
      </div>
    </div>
  );
}
