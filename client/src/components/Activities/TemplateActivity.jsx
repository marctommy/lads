import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";

export const TemplateActivity = () => {
  const navigate = useNavigate();

  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
    date: "",
    start: "",
    withChildren: "",
    location: "",
    duration: 0,
    category: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3005/api/activities/create",
        { ...newActivity }
      );
      navigate("/activities");
    } catch (error) {
      console.log(error);
    }
  };

  const templateList = [
    {
      value: "Cooking and Griling ",
      description:
        "Being able to feed yourself well is a basic part of self-sufficiency, guys. Moreover, when you learn how things go together, and how to create a perfect meal from scratch, you make yourself an asset in any hungry situation.",
      id: 1,
    },
    {
      value: "Exercise and play a sport",
      description:
        "To stay fit and healthy, you can do exercise alone, such as swimming or working out at a gym, or you can play a team sport, such as football or basketball.",
      duration: "2",
      id: 2,
    },
    {
      value: "Music Instrument",
      description: "Learn and play together",
      id: 3,
    },
    {
      value: "Go to cultural locations and events",
      description:
        "You can go to the museum, to an art gallery or to the zoo to see animals from around the world. You can go to concerts, plays, musicals, dance recitals and opera performances.",
      id: 3,
    },
    {
      value: "Play Date with children",
      description:
        "Your child(ren) is the focus here. Bring your children together and exchange ideas and tips with other fathers.",
      withChildren: true,
      id: 4,
    },
    {
      value: "Talk and walk",
      description:
        "Take your peer for a walk and talk about life, the weather, but not politics.",
      id: 5,
    },
    {
      value: "Power of Creativity",
      description:
        "Photography, exchange of ideas, design and coding, online marketing, Painting, drawing or others.",
      id: 6,
    },
    {
      value: "Running",
      description:
        "Go for a run, compete, train for the next big charity race.",
      id: 7,
    },
    {
      value: "Long walks and hikes",
      description: "Fresh air clears the head. Just keep walking.",
      id: 8,
    },
    {
      value: "On the big screen",
      description:
        "Watch soccer or sports events, binge a tv show or enjoy a bloke movie together over beer and snacks or cook a meal before",
      id: 9,
    },
    {
      value: "Meditation and Yoga",
      description:
        "Meeting in the park or at home for a session of yoga and practising mindfulness together over a 30 minute meditation",
      id: 10,
    },
    {
      value: "Co-Working",
      description:
        "Have a project in mind that you always wanted to pursue further? Co-Working is the place for finding other like-minded enthusiasts helping to get this project get togethe.",
      id: 11,
    },
  ];

  return (
    <div>
      <center>
        <div className="form">
          <form className="card" onSubmit={handleSubmit}>
            <label>
              Name
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={templateList[0]}
                name="activity"
                options={templateList}
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
                    time: event.target.value,
                  });
                }}
                value={newActivity.time}
              />
            </label>

            <label>
              With Children?
              <input
                type="checkbox"
                onChange={(event) => {
                  setNewActivity({
                    ...newActivity,
                    withChildren: event.target.value,
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
              <span></span>
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
    </div>
  );
};
