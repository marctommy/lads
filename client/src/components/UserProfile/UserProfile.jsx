import React from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import photo from "./profile-photo.png";

export default function UserProfile(props) {
  const { loggedInUser } = props;
  return (
    <div>
      <Navbar isLoggedIn={!!loggedInUser}></Navbar>
      <Header />

      <div className="card">
        <center>
          <h2>
            {" "}
            User Name <small>Berlin</small>
          </h2>

          <img className="profile-photo" src={photo} />

          <em> Biography: </em>
        </center>
      </div>
    </div>
  );
}
