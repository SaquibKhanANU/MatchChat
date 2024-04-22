import "./MatchContainer.css";
import MatchGameDataContainer from "./MatchGameDataContainer";
import MatchTeamDataContainer from "./MatchTeamDataContainer";
import MatchTeams from "./MatchTeams";

function MatchContainer(): JSX.Element {
  return (
    <div className="match-container-container">
      <MatchTeams />
      <MatchTeamDataContainer />
      <MatchGameDataContainer />
    </div>
  );
}

export default MatchContainer;
