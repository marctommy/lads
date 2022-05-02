import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  //   console.log(props);
  const { isLoggedIn } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/">Home</Link>
      <Link to="/user">Profile</Link>
      <Link to="/activities">See Activities</Link>

      {isLoggedIn ? (
        <p> You are currently logged in</p>
      ) : (
        <Link to="/signup"> Signup </Link> && <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
