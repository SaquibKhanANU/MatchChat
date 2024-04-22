import "./PostCard.css";
import Heart from "../../assets/icons/icons8-heart-50.png";
import Comment from "../../assets/icons/icons8-comment.svg";
import Profile from "../../assets/icons/icons8-test-account-30.png";
import Tag from "../util/tag/Tag";
import Stat from "../util/stat/Stat";
import { Link } from "react-router-dom";

// interface PostCardProps {

// }

/* Placeholder values TODO: remove fix placeholders */
function PostCard(): JSX.Element {
  return (
    <div className="post-card-container">
      <div className="post-card-teams-container">
        <div className="post-card-teams-team">
          <img
            src="https://am-a.akamaihd.net/image?resize=50:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1655210113163_GenG_logo_200407-05.png"
            alt="Team 1"
          />
          {/* <p>GenG</p> */}
        </div>
        <p>VS</p>
        <div className="post-card-teams-team">
          <img
            src="https://am-a.akamaihd.net/image?resize=50:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1704375161752_T1_esports.png"
            alt="Team 2"
          />
          {/* <p>T1</p> */}
        </div>
      </div>
      <div className="post-card-content-container">
        <div className="post-card-title-container">
          <Link className="plain-link" to="/match/0">
            <h1>GenG vs T1</h1>
          </Link>
        </div>
        <div className="post-card-tags-container">
          <Tag text="LCK" />
          <Tag text="FINALS" />
        </div>
        <br />
        <div className="post-card-stats-container">
          <ul>
            <li>
              <Stat text="140" img={Heart} alt="Likes" />
            </li>
            <li>
              <Stat text="20" img={Comment} alt="Comments" />
            </li>
          </ul>
          <div className="post-card-profile-container">
            <img src={Profile} alt="Profile" />
            <div className="post-card-user-info-container">
              <p id="post-card-username">MatchChat</p>
              <p id="post-card-date">3 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
