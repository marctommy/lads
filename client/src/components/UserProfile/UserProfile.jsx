import React from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

export default function UserProfile(props) {
  const { loggedInUser } = props;
  return (
    <div>
      <Navbar isLoggedIn={!!loggedInUser}></Navbar>
      <Header />
      <h1>Welcome to your User Profile</h1>
      <button> Link</button>
    </div>
  );
}
