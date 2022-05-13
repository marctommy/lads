import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ItemActivity = ({ activity, events, updatedUser }) => {
  // console.log("activity", activity);
  // const [updateEvents, setUpdateEvents] = useState();
  const {
    _id,
    name,
    description,
    duration,
    category,
    location = "Berlin",
    date,
    user,
  } = activity;

  const handleAttend = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3005/api/user/${user._id}`,
        {
          newEventId: _id,
        }
      );
      console.log("attend", response);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleAttendTwo = (activityId) => {
  //   if (!events?.includes(activityId)) {
  //     events?.push(activityId);
  //   } else {
  //     console.log("clicked");
  //     const updatedEventsList = events.filter((event) => event !== activityId);
  //     setUpdateEvents(updatedEventsList);
  //     console.log("updatedEventsList", updatedEventsList);
  //     console.log("updateduser", updatedUser);
  //   }
  // };

  // toggleDisabled = () =>
  //   this.setState((state) => ({ isDisabled: !state.isDisabled }));

  const isAttended = (activityId) => {
    if (events?.includes(activityId)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="activity-list">
      <center>
        <div className="row d-flex justify-content-center align-items-center h-60">
          <div className="col col-xl-10">
            <div className="card mb-5">
              <div className="card-body p-4">
                <h3 className="mb-3"> {name}</h3>
                <span
                  className="badge rounded-pill bg-primary"
                  key={category.id}
                >
                  {category}
                </span>
                <div className="small mb-0">
                  <i className="far fa-star fa-lg"></i>
                  created by {user.name}
                  <div className="mx-2">|</div> In Berlin
                  <strong> {duration} hours</strong> on Date {date || "Now"}
                  <div className="d-flex justify-content-start align-items-center">
                    <div className="mb-0 text-udivercase">
                      <span className="text-muted small">
                        Description:{description}:
                      </span>

                      <br />
                      <span className="text-muted small">
                        Location:{location}
                      </span>
                      <button
                        onClick={handleAttend}
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-floating"
                      >
                        {isAttended ? "unattend" : "attend"}
                      </button>

                      <Link
                        to={`/activities/${_id}`}
                        className="btn btn-outline-dark btn-sm btn-floating"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
