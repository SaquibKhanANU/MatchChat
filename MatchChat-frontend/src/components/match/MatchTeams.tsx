import "./MatchTeams.css";

interface MatchTeamsProps {
  numGames: number;
  team1: string;
  team2: string;
  score: string;
}

function MatchTeams(): JSX.Element {
  return (
    <div className="match-teams-container">
      <h3>BO3</h3>
      <div className="match-teams-teams">
        <img
          src="https://am-a.akamaihd.net/image?resize=150:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1655210113163_GenG_logo_200407-05.png"
          alt="Team 1"
        />
        <div className="match-teams-stats">
          <h1>2-1</h1>
        </div>
        <img
          src="https://am-a.akamaihd.net/image?resize=150:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1704375161752_T1_esports.png"
          alt="Team 2"
        />
      </div>
    </div>
  );
}

export default MatchTeams;
