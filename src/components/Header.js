import logo from "../../images/logo.png";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/useContext";

const loggedInUser = () => {
  return false;
};

export const Title = () => (
  <a href="/">
    <img className="h-28 py-2 px-2" src={logo} alt="Food  Logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const {user} = useContext(UserContext);

  return (
    <>
    <div className="flex items-center justify-between bg-pink-50 shadow-md mb-5 px-5">
      <Title />
      <div>
        <ul className="flex py-8">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      
      <h1>{useOnline ? "🟩 Online" : "🟥 Offline"}</h1>
     <h1 className="text-blue-950">  {user.name}</h1>
      <div className="">
        {isLoggedIn ? (
          <button className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 px-4 rounded" onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-2 rounded">Log In</button>
        )}
      </div>
    </div>
    </>
    
  );
};

export default Header;
