import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { EditActivity } from "./EditActivity";
import DeleteActivity from "./DeleteActivity";
import { LoadingComponent } from "../Header/LoadingComponent";

import ChatContainer from "../Chat/ChatContainer";

export const Details = ({ loggedInUser, userInfo }) => {
  console.log("what are the", userInfo);
  const [activity, setActivity] = useState();
  const [showEditForm, setShowEditForm] = useState(false);

  const { id: activityId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3005/api/activities/${activityId}`
      );
      setActivity(data);
      console.log(data);
    };
    fetchData();
  }, [activityId]);

  if (!activity) return <LoadingComponent />;

  return (
    <div className="card">
      <center>
        <h2>
          {activity.name}
          <br />
          <small>{activity.location || "Berlin"}</small>
        </h2>
        {/* <div> Created By: {user.name}</div> */}
      </center>

      <center>
        <span></span> Category:
        <span className="badge rounded-pill bg-primary">
          {activity.category}
        </span>
      </center>
      <hr />
      <div className="details-container">
        <div className="container-left">
          <p className="text-left">
            <strong>Description: </strong>
            {activity.description}
          </p>
          <DeleteActivity activity={activity} />

          <button
            onClick={() => setShowEditForm(!showEditForm)}
            className="btn btn-outline-dark btn-sm btn-floating"
          >
            Edit
          </button>
          {showEditForm ? <EditActivity activity={activity} /> : null}
        </div>
        <div className="container-right"></div>
        <ChatContainer
          loggedInUser={loggedInUser}
          conversation={activity.conversation}
        />
      </div>
    </div>
  );
};
