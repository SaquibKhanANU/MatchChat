import "./Navbar.css";
import Logo from "../../assets/icons/league_logo.svg";
import Home from "../../assets/icons/icons8-home.svg";
import Mailbox from "../../assets/icons/icons8-mailbox.svg";
import Calendar from "../../assets/icons/icons8-calendar-24.png";
import Search from "../../assets/icons/icons8-search.svg";
import Notification from "../../assets/icons/icons8-notification-24.png";
import Profile from "../../assets/icons/icons8-test-account-30.png";
import Team from "../../assets/icons/icons8-team-24.png";
import ArrrowDown from "../../assets/icons/icons8-arrow-down-30.png";
import { Link } from "react-router-dom";

function Navbar(): JSX.Element {
    return (
        <nav className="navbar-container">
            <Link to="" className="navbar-logo-container plain-link">
                <img src={Logo} alt="League Logo" />
                <h1>MatchChat</h1>
            </Link>
            <div>
                {/* <ul>
          <li>
            <Link to="" className="plain-link">
              <img src={Home} alt="Home" />
            </Link>
          </li>
          <li>
            <img src={Mailbox} alt="Mailbox" />{" "}
          </li>
          <li>
            <img src={Calendar} alt="Mailbox" />{" "}
          </li>
        </ul> */}
            </div>
            <div className="navbar-search-container">
                <input type="text" placeholder="Type here to search..." />
                <img src={Search} alt="Search" />
            </div>
            <div>
                <ul>
                    <li>
                        <img src={Team} alt="Team" />
                    </li>
                    <li>
                        <img src={Notification} alt="Notification" />
                    </li>
                </ul>
            </div>
            <div className="navbar-profile-container">
                <img src={Profile} alt="Profile" />
                <p>John</p>
                <img
                    src={ArrrowDown}
                    alt="Arrow Down"
                    className="navbar-profile-arrow"
                />
            </div>
        </nav>
    );
}

export default Navbar;
