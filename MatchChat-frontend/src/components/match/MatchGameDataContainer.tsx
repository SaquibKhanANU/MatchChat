import "./MatchGameDataContainer.css";
import MatchGameData from "./MatchGameData";

function MatchGameDataContainer(): JSX.Element {
  return (
    <div className="match-game-data-container">
      <div>
        <p>Team1</p>
        <p>Team2</p>
      </div>
      <MatchGameData winner={false} />
      <MatchGameData winner={true} />
      <MatchGameData winner={false} />
      <MatchGameData winner={false} />
      <MatchGameData winner={false} />
    </div>
  );
}

export default MatchGameDataContainer;
