import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { EditActivity } from "./EditActivity";
import DeleteActivity from "./DeleteActivity";
import { LoadingComponent } from "../Header/LoadingComponent";
// import { Map } from "../Features/Map";

export const Details = () => {
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
        <span>
          <strong> </strong>
        </span>{" "}
        Category:
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
        <strong>Description: </strong>
        {activity.description}
        {/* <Map locationInfo={activity} /> */}
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
  );
};
