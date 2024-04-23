import "./Sidebar.css";
import Home from "../../assets/icons/icons8-home.svg";
import Mailbox from "../../assets/icons/icons8-mailbox.svg";
import Calendar from "../../assets/icons/icons8-calendar-24.png";

function Sidebar(): JSX.Element {
    return (
        <div className="sidebar-container">
            <div className="sidebar-section">
                <ul>
                    <li>
                        <img src={Home} alt="Home" />
                        <p>Home</p>
                    </li>
                    <li>
                        <img src={Mailbox} alt="Home" />
                        <p>Popular</p>
                    </li>
                    <li>
                        <img src={Mailbox} alt="Home" />
                        <p>Latest</p>
                    </li>
                    <li>
                        <img src={Calendar} alt="Home" />
                        <p>Schedule</p>
                    </li>
                </ul>
            </div>
            <div className="sidebar-section">
                <div>Recent</div>
                <ul>
                    <li>T1 vs Geng</li>
                    <li>T1 vs Geng</li>
                    <li>T1 vs Geng</li>
                    <li>T1 vs Geng</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <ul>
                    <li>Privacy Policy</li>
                    <li>User Agreement</li>
                    <li>T1 vs Geng</li>
                </ul>
            </div>
        </div>
    );
}
export default Sidebar;
