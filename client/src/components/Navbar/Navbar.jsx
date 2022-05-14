import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props, { loggedInUser }) => {
  const { isLoggedIn } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <button className="nav">Home</button>
      </Link>
      {isLoggedIn ? (
        <Link to="/user">
          <button className="nav">Profile</button>
        </Link>
      ) : (
        ""
      )}
      {isLoggedIn ? (
        <Link to="/activities">
          <button className="nav">Activities</button>
        </Link>
      ) : (
        ""
      )}

      {isLoggedIn ? (
        <span className="navbar-heading">
          Welcome, {props.currentUser.name}
        </span>
      ) : (
        <Link to="/login">
          <button className="nav">Login</button>
        </Link>
      )}

      {isLoggedIn ? (
        <button className="nav" type="button" onClick={props.logoutHandler}>
          Logout
        </button>
      ) : (
        <Link to="/signup">
          <button className="nav">Sign Up</button>{" "}
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
