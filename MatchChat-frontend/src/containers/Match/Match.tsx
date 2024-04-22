import "./Match.css";
import Post from "../../components/post/Post";
import MatchContainer from "../../components/match/MatchContainer";

function Match(): JSX.Element {
  return (
    <div className="match-container">
      <Post headerElement={<MatchContainer />} />
    </div>
  );
}

export default Match;
