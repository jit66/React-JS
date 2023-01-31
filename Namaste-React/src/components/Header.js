import { useEffect, useState } from "react";
import Logo from "../assets/images/FoodVilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [title, setTitle] = useState("Food Villa");
  const [isloggedIn, setisLoggedIn] = useState(false);
  const isOnline = useOnline();

  useEffect(() => {
    // console.log('use effect')
  });

  // console.log("render")

  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>

      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      {isloggedIn ? (
        <button onClick={() => setisLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedIn(true)}>login</button>
      )}
    </div>
  );
};

export default Header;
