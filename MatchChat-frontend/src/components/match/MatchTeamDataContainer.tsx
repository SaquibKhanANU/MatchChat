import "./MatchTeamDataContainer.css";
import MatchTeamData from "./MatchTeamData";

function MatchTeamDataContainer(): JSX.Element {
  return (
    <div className="match-team-data-container-container">
      <MatchTeamData />
      <MatchTeamData />
    </div>
  );
}

export default MatchTeamDataContainer;
