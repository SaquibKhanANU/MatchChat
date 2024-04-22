import "./Match.css";
import PostInfo from "../../components/post/PostInfo";
import MatchContainer from "../../components/match/MatchContainer";

function Match(): JSX.Element {
  return (
    <div className="match-container">
      <PostInfo headerElement={<MatchContainer />} />
    </div>
  );
}

export default Match;
