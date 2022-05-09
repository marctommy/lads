import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { EditActivity } from "./EditActivity";
import DeleteActivity from "./DeleteActivity";
import { LoadingComponent } from "../Header/LoadingComponent";
// import { Map } from "../Features/Map";
import ChatContainer from "../Chat/ChatContainer";
import map from "./maps.png";

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
      </center>

      <center>
        <span></span> Category:
        <span className="badge rounded-pill bg-primary">
          {activity.category}
        </span>
        {/* <span className="badge rounded-pill bg-secondary">DIY</span>
        <span className="badge rounded-pill bg-success">Mindfulness</span>
        <span className="badge rounded-pill bg-danger">Sports</span>
        <span className="badge rounded-pill bg-dark">Games</span>
        <span className="badge rounded-pill bg-warning text-dark">
          & Children
        </span>
        <span className="badge rounded-pill bg-light text-dark">Others</span> */}
      </center>
      <hr />
      <div className="details-container">
        <div className="container-left">
          <p className="text-left">
            <strong>Description: </strong>
            {activity.description}
            {/* <Map locationInfo={activity} /> */}
          </p>
          <img className="detail-map" alt="map" src={map} />
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
