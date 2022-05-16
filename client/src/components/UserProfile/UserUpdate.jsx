import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserUpdate = ({ loggedInUser }) => {
  console.log("loggedinUserupdate", loggedInUser);
  const navigate = useNavigate();
  const { id } = useParams();

  const [updatedUser, setUpdatedUser] = useState({
    name: loggedInUser.name,
    description: loggedInUser.description,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3005/api/user/${loggedInUser._id}`,
        {
          ...updatedUser,
        }
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            onChange={(event) => {
              setUpdatedUser({
                ...updatedUser,
                name: event.target.value,
              });
            }}
            value={updatedUser.name}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            onChange={(event) => {
              setUpdatedUser({
                ...updatedUser,
                description: event.target.value,
              });
            }}
            value={updatedUser.description}
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
  );
};

export default UserUpdate;
//
