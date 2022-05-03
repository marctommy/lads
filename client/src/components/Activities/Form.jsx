import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
  const navigate = useNavigate();

  const [newActivity, setNewActivity] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3005/api/activities/create",
        newActivity
      );
      console.log(response);
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          onChange={(event) => {
            setNewActivity({
              ...newActivity,
              name: event.target.value,
            });
          }}
          value={newActivity.name}
        />
      </label>

      <label>
        Description
        <input
          type="text"
          onChange={(event) => {
            setNewActivity({
              ...newActivity,
              description: event.target.value,
            });
          }}
          value={newActivity.description}
        />
      </label>

      <label>
        Duration
        <input
          type="number"
          onChange={(event) => {
            setNewActivity({
              ...newActivity,
              duration: event.target.value,
            });
          }}
          value={newActivity.duration}
        />
      </label>

      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
