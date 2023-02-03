import { useEffect, useState } from "react";
import Logo from "../assets/images/FoodVilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => (
  <a href="/">
    <img className="h-20 p-2 rounded-xl" alt="logo" src={Logo} />
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
    <div className="h-20 m-2  flex justify-between rounded-xl bg-pink-100 shadow-lg md:bg-orange-500">

      <Title />
      {/* <h1>{title}</h1> */}
      <div className="nav-items">
        <ul className="flex py-7">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
          <li className="px-2">
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
