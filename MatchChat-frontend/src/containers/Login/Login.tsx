import "./Login.css";
import { useState } from "react";
import LoginBanner from "../../assets/imgs/login_banner.jpeg";

function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true); // State to track which form is displayed

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (isLoginForm) {
  //     console.log("Logging in with:", username, password);
  //   } else {
  //     console.log("Signing up with:", username, password);
  //   }
  // };

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
    setUsername("");
    setPassword("");
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url('https://lolstatic-a.akamaihd.net/rso-authenticator-ui/0.50.83/assets/riot_desktop_background_2x.jpg')`,
      }}
    >
      <div className="login-form-container">
        <div className="login-form-header">
          <img
            src="https://am-a.akamaihd.net/image?resize=55:&f=http%3A%2F%2Fstatic.lolesports.com%2Fleagues%2Flck-color-on-white.png"
            alt="LCK Logo"
          />
        </div>
        <div className="login-form-left">
          <form
            className={isLoginForm ? "login-form-signin" : "login-form-signup"}
          >
            <div>
              <h2>{isLoginForm ? "Login" : "Sign Up"}</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={() => console.log("gelo")}>{String.fromCharCode(8614)}</button>
              <p>
                {isLoginForm
                  ? "READY TO MAKE YOUR TEAM?"
                  : "ALREADY HAVE A TEAM?"}{" "}
                <button
                  id="sign-up-button"
                  type="button"
                  onClick={handleSwitchForm}
                >
                  {isLoginForm ? "SIGN UP" : "LOGIN"}
                </button>
              </p>
            </div>
          </form>
        </div>
        <div
          className="login-form-right"
          style={{ backgroundImage: `url(${LoginBanner})` }}
        ></div>
      </div>
    </div>
  );
}

export default Login;
