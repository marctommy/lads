import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  //   console.log(props);
  const { userState } = props;
  return (
    <nav className="row">
      <Link to="/">Home</Link>
      <Link to="/user">My project</Link>
      <Link to="//create">Create a new project</Link>
      {userState.isLoggedin ? (
        <p>Hello {userState.user.username} </p>
      ) : (
        <Link to="/signup"> Signup </Link>
      )}
    </nav>
  );
};
