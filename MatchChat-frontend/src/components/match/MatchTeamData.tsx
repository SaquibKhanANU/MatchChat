import Stat from "../util/stat/Stat";

function MatchTeamData(): JSX.Element {
  return (
    <div className="match-team-data-container">
      <div>
        <h1>T1</h1>
        <div>{/* <Stat name="KDA" value="2.0" /> */}</div>
      </div>
      <table>
        <tr>
          <th>Player</th>
          <th>KDA</th>
          <th>CSM</th>
          <th>DPM</th>
          <th>WPM</th>
        </tr>
        <tr>
          <td>Faker</td>
          <td>2.0</td>
          <td>10.0</td>
          <td>1402.0</td>
          <td>3.0</td>
        </tr>
      </table>
    </div>
  );
}

export default MatchTeamData;
