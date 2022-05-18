import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { EditActivity } from "./EditActivity";
import DeleteActivity from "./DeleteActivity";
import { LoadingComponent } from "../Header/LoadingComponent";

import ChatContainer from "../Chat/ChatContainer";

export const Details = ({ loggedInUser }) => {
  const [activity, setActivity] = useState();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showChatbubble, setShowChatbubble] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const { id: activityId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3005/api/activities/${activityId}`
      );
      console.log("data", data);
      setActivity(data);
    };
    fetchData();
  }, [activityId]);

  if (!activity) return <LoadingComponent />;

  // console.log("username", typeof activity.user.name);
  // const userName = JSON.stringify(activity.user.name, null, 4).replace(
  //   /["{[,\}\]]/g,
  //   ""
  // );
  // console.log(typeof userName);

  // const userAvatar = JSON.stringify(activity.user.avatarId, null, 4).replace(
  //   /["{[,\}\]]/g,
  //   ""
  // );

  // const userLocation = JSON.stringify(activity.user.location, null, 4).replace(
  //   /["{[,\}\]]/g,
  //   ""
  // );
  // console.log("userLocation", userLocation);

  // const userDescription = JSON.stringify(activity.user.description, null, 4);

  const hobbiestList = activity.user.hobbies.map((hobby) => {
    return <span className="badge rounded-pill bg-success"> {hobby}</span>;
  });

  const handleWelcome = () => {
    setShowChatbubble(!showChatbubble);
  };

  return (
    <center>
      <div className="card activity-list back-img">
        <center>
          <h2>{activity.name} </h2>

          <span className="badge rounded-pill bg-primary">
            {activity.category}
          </span>
          <p className="text-muted small">{activity.location || "Berlin"}</p>
        </center>
        {showChatbubble ? (
          <div
            style={{ position: "absolute", marginTop: 100, paddingLeft: 440 }}
          >
            <h4> Hi! My Name is {activity.user.name}.</h4>
            <span> I am currently living in {activity.user.location}.</span>
            <hr />
            <p>
              <span>{hobbiestList} </span>
              <br />{" "}
            </p>
            <p style={{ width: 250 }}>
              <strong>About me: </strong>
              {activity.user.description ||
                "I will think of something later."}{" "}
            </p>
          </div>
        ) : null}

        <img
          className="profile-photo activity-profile"
          alt="profile"
          src={require(`../UserProfile/avatars/${activity.user.avatarId}.gif`)}
        />

        <center>
          {" "}
          <button
            className="btn btn-outline-dark btn-sm btn-floating"
            onClick={handleWelcome}
          >
            Some facts about me
          </button>
        </center>
        <hr />

        <p className="text-left">
          <strong>Description: </strong>
          {activity.description || "Looking for description."}
        </p>

        {activity.withChildren ? (
          <img
            style={{ width: "150px", marginLeft: 500 }}
            alt="profile"
            src={require(`../assets/true-children.gif`)}
          />
        ) : null}

        {loggedInUser._id === activity.user._id ? (
          <div>
            <DeleteActivity activity={activity} />

            <button
              onClick={() => setShowEditForm(!showEditForm)}
              className="btn btn-outline-dark btn-sm btn-floating"
            >
              Edit
            </button>
            {showEditForm ? <EditActivity activity={activity} /> : null}
          </div>
        ) : null}

        <button
          onClick={() => setShowChat(!showChat)}
          className="btn btn-outline-dark btn-sm btn-floating"
        >
          Chat
        </button>

        {showChat ? (
          <ChatContainer
            activity={activity}
            loggedInUser={loggedInUser}
            conversation={activity.conversation}
          />
        ) : null}
      </div>
    </center>
  );
};
