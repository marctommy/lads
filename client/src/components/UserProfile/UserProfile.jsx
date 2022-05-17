import React, { useState } from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserUpdate from "./UserUpdate";

export default function UserProfile({ loggedInUser, setLoggedInUser }) {
  const [showChatbubble, setShowChatbubble] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const {
    // _id,
    name,
    hobbies = [],
    avatarId = "glassesblonde",
    eventsAttended,
    location = "Berlin",
    description,
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
              <span className="badge rounded-pill bg-success" key={hobby.id}>
                {hobby}
              </span>
            ))}
          </section>
        </center>
        <hr />
        <p className="text-left">
          <strong>Bio: </strong>
          {description}
        </p>

        <button
          onClick={() => setShowEditForm(!showEditForm)}
          className="btn btn-outline-dark btn-sm btn-floating"
        >
          Edit
        </button>
        {showEditForm ? <UserUpdate loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> : null}
      </div>
    </center>
  );
}
