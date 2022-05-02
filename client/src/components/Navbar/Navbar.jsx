import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  //   console.log(props);
  const { isLoggedIn } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/user">
        <button>Profile</button>
      </Link>
      <Link to="/activities">
        <button>Activities</button>
      </Link>

      {isLoggedIn ? (
        <p> You are currently logged in</p>
      ) : (
        <Link to="/signup"> Signup </Link> && <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
