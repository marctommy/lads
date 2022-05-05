import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const EditActivity = ({ activity }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("activity", activity);
  const [updatedActivity, setUpdatedActivity] = useState({
    name: activity.name,
    description: activity.description,
    duration: activity.duration,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const update = await axios.put(
        `http://localhost:3005/api/activities/${id}`,
        { ...updatedActivity }
      );
      console.log(update);
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(activity);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={(event) => {
              setUpdatedActivity({
                ...updatedActivity,
                name: event.target.value,
              });
            }}
            value={updatedActivity.name}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            onChange={(event) => {
              setUpdatedActivity({
                ...updatedActivity,
                description: event.target.value,
              });
            }}
            value={updatedActivity.description}
          />
        </label>

        <label>
          Duration
          <input
            type="number"
            onChange={(event) => {
              setUpdatedActivity({
                ...updatedActivity,
                duration: event.target.value,
              });
            }}
            value={updatedActivity.duration}
          />
        </label>

        <center>
          Category:
          <section> {activity.category}</section>
        </center>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

//
