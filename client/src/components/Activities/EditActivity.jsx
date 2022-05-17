import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const EditActivity = ({ activity }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [updatedActivity, setUpdatedActivity] = useState({
    name: activity.name,
    description: activity.description,
    location: activity.location,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const update = await axios.put(
        `http://localhost:3005/api/activities/${id}`,
        { ...updatedActivity }
      );

      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <center>
      <div className="card edit-form" style={{ position: "absolute" }}>
        <form onSubmit={handleSubmit}>
          <div className="edit-child">
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
          </div>
          <div className="edit-child">
            <label>
              Description
              <br />
              <textarea
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
          </div>
          <label>
            Location
            <input
              type="text"
              onChange={(event) => {
                setUpdatedActivity({
                  ...updatedActivity,
                  location: event.target.value,
                });
              }}
              value={updatedActivity.location}
            />
          </label>

          <button
            className="btn btn-outline-dark btn-sm btn-floating"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </center>
  );
};

//
