import React from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./avatars/profile.gif";

export default function UserProfile({ loggedInUser }) {
  const {
    // _id,
    name,
    hobbies,
    avatarId,
    eventsAttended,
    location = "Berlin",
  } = loggedInUser;

  console.log(hobbies);

  const handleWelcome = () => {
    console.log("clicked");
    return (
      <img
        className="profile-bubble"
        alt="bubble"
        src={require("./chatbubble.png")}
      ></img>
    );
  };

  return (
    <center>
      <div className="card user-profile">
        <center>
          <h2>
            {name || "Name"}
            <br />
            <small>{location}</small>
          </h2>

          <button className="profile-button">
            <img
              onClick={handleWelcome}
              className="profile-photo"
              alt="profile"
              src={profile}
            />
          </button>
        </center>
        <center>
          <span>Here For:</span>
          <br />{" "}
          <sections>
            {hobbies.map((hobby) => (
              <span className="badge rounded-pill bg-primary" key={hobby.id}>
                {hobby}
              </span>
            ))}
          </sections>
        </center>
        <hr />
        <p className="text-left">
          <strong>Bio: </strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui,
          tempor sit amet commodo a, vulputate vel tellus.
        </p>
      </div>
    </center>
  );
}
