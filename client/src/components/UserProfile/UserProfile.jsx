import React from "react";
import "./UserProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./avatars/profile.gif";
// import glassdark from "./avatars/glassdark.gif";
// import laughing from "./avatars/laughing.gif";
// import moustache from "./avatars/moustache.gif";
// import muscle from "./avatars/muscle.gif";
// import oldnerd from "./avatars/oldnerd.gif";
// import redhair from "./avatars/redhair.gif";
// import suit from "./avatars/suit.gif";

export default function UserProfile(props) {
  console.log(props);
  const { loggedInUser } = props;

  return (
    <div className="card">
      <center>
        <h2>
          {props.loggedInUser.name}
          <br />
          <small>Berlin</small>
        </h2>

        <img className="profile-photo" alt="profile" src={profile} />
      </center>
      <center>
        <span>
          <strong>Here for: </strong>
        </span>
        <span className="badge rounded-pill bg-primary">Outdoor</span>
        <span className="badge rounded-pill bg-secondary">DIY</span>
        <span className="badge rounded-pill bg-success">Mindfulness</span>
        <span className="badge rounded-pill bg-danger">Sports</span>
        <span className="badge rounded-pill bg-dark">Games</span>
        <span className="badge rounded-pill bg-warning text-dark">
          & Children
        </span>
        <span className="badge rounded-pill bg-light text-dark">Others</span>
      </center>
      <hr />
      <p className="text-left">
        <strong>Bio: </strong>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui,
        tempor sit amet commodo a, vulputate vel tellus.
      </p>
    </div>
  );
}
