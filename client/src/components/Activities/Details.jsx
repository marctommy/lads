import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { EditActivity } from "./EditActivity";
import DeleteActivity from "./DeleteActivity";
import { LoadingComponent } from "../Header/LoadingComponent";

import ChatContainer from "../Chat/ChatContainer";

export const Details = ({ loggedInUser }) => {
  const [activity, setActivity] = useState();
  const [showEditForm, setShowEditForm] = useState(false);

  const { id: activityId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3005/api/activities/${activityId}`
      );
      setActivity(data);
    };
    fetchData();
  }, [activityId]);
  console.log("activity", activity);
  if (!activity) return <LoadingComponent />;

  console.log("activity", activity);
  console.log("logged", loggedInUser);
  return (
    <div className="card">
      <center>
        <h2>
          {activity.name}
          <br />
          <small>{activity.location || "Berlin"}</small>
        </h2>
        <div>Created By: {JSON.stringify(activity.user)}</div>
      </center>
      <img
        className="profile-photo"
        alt="profile"
        // src={require(`../UserProfile/avatars/moustache.gif`)}
      />

      <center>
        <span></span> Category:
        <span className="badge rounded-pill bg-primary">
          {activity.category}
        </span>
      </center>
      <hr />

      <p className="text-left">
        <strong>Description: </strong>
        {activity.description}
      </p>

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

      <ChatContainer
        loggedInUser={loggedInUser}
        conversation={activity.conversation}
      />
    </div>
  );
};
