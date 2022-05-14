import React, { useState } from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./avatars/profile.gif";

export default function UserProfile({ loggedInUser }) {
  const [showChatbubble, setShowChatbubble] = useState(false);

  const {
    // _id,
    name,
    hobbies = [],
    avatarId = "glassesblonde",
    eventsAttended,
    location = "Berlin",
  } = loggedInUser;

  const handleWelcome = () => {
    setShowChatbubble(!showChatbubble);
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
          {showChatbubble ? (
            <img
              style={{ position: "absolute" }}
              className="chat-bubble"
              src={require("./chatbubble.png")}
              alt="tag"
            />
          ) : null}
          <img
            onClick={handleWelcome}
            className="profile-photo"
            alt="profile"
            src={require(`./avatars/${avatarId}.gif`)}
          />
        </center>
        <center>
          <span>Here For:</span>
          <br />{" "}
          <section>
            {hobbies.map((hobby) => (
              <span className="badge rounded-pill bg-primary" key={hobby.id}>
                {hobby}
              </span>
            ))}
          </section>
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
