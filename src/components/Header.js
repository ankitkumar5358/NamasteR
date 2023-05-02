import logo from "../../images/logo.png";
import { useEffect, useState } from "react"; // named import
import "../../App.css";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  return false;
};

export const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="Food  Logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{useOnline ? "🟩 - Online" : "🟥 - Offline"}</h1>
      <div className="button-container">
        {isLoggedIn ? (
          <button
            className="logout-button"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button className="login-button" onClick={() => setIsLoggedIn(true)}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
