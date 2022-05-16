import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = ({ loggedInUser }) => {
  const { _id } = loggedInUser;
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState();
  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
    date: "",
    start: "",
    withChildren: false,
    location: "",
    duration: 0,
    category: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3005/api/activities/create",
        { ...newActivity, category: categoryId, user: _id }
      );
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  const categories = [
    { text: "Outdoor", categoryId: "Outdoor" },
    { text: "DIY", categoryId: "DIY" },
    { text: "Mindfulness", categoryId: "Mindfulness" },
    { text: "Sports", categoryId: "Sports" },
    { text: "Games", categoryId: "Games" },
    { text: "Networking", categoryId: "Networking" },
    { text: "Others", categoryId: "Others" },
  ];

  return (
    <center>
      <div className="form">
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
            Date
            <input
              type="date"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  date: event.target.value,
                });
              }}
              value={newActivity.date}
            />
          </label>

          <label>
            Start
            <input
              type="time"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  start: event.target.value,
                });
              }}
              value={newActivity.start}
            />
          </label>

          <label>
            With Children?
            <input
              type="checkbox"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  withChildren: event.target.checked,
                });
              }}
              value={newActivity.withChildren}
            />
          </label>

          <label>
            Location
            <input
              type="text"
              onChange={(event) => {
                setNewActivity({
                  ...newActivity,
                  location: event.target.value,
                });
              }}
              value={newActivity.location}
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
          <center>
            <span>
              <strong> </strong>
            </span>{" "}
            Category:
            <section>
              {categories.map((category) => (
                <span
                  className={`badge rounded-pill ${
                    categoryId === category.categoryId
                      ? "bg-primary"
                      : "bg-secondary"
                  }`}
                  onClick={() => setCategoryId(category.categoryId)}
                  key={category.categoryId}
                >
                  {category.text}
                </span>
              ))}
            </section>
          </center>
          <button
            type="submit"
            className="btn btn-outline-dark btn-sm btn-floating"
          >
            Create
          </button>
        </form>
      </div>
    </center>
  );
};

export default Form;
