import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  //   console.log(props);
  const { isLoggedIn } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <button className="nav">Home</button>
      </Link>
      <Link to="/user">
        <button className="nav">Profile</button>
      </Link>
      <Link to="/activities">
        <button className="nav">Activities</button>
      </Link>
      <button className="nav" type="button" onClick={props.logoutHandler}>
        Logout
      </button>

      {isLoggedIn ? (
        <p> You are currently logged in</p>
      ) : (
        <Link to="/signup"> Signup </Link> && <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
