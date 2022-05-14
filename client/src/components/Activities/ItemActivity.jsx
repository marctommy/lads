import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Details } from "./Details";

export const ItemActivity = ({ activity, loggedInUser }) => {
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

  console.log("user", user);

  console.log("loggedInUserCheck", loggedInUser);
  const [isAttended, setIsAttended] = useState(
    loggedInUser.eventsAttended?.includes(_id)
  );

  const handleAttend = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3005/api/user/${loggedInUser._id}`,
        {
          newEventId: _id,
        }
      );
      setIsAttended(true);
      console.log("attend", response);
    } catch (error) {
      console.log(error);
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
                </span>{" "}
                <br />
                <span>
                  {" "}
                  <strong> Duration: mininum {duration} hours</strong>
                  <br /> on Date {date || "Now"}{" "}
                </span>
                <div className="small mb-0">
                  <i className="far fa-star fa-lg"></i>
                  Created by {user.name}
                  <img
                    alt="Profile"
                    // src={require(`../UserProfile/avatars/${user.avatarId}`)}
                  />
                  <div className="mx-2">|</div> In Berlin
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
                        disabled={isAttended}
                        onClick={handleAttend}
                        type="button"
                        className="btn btn-outline-dark btn-sm btn-floating"
                      >
                        {isAttended ? "attended" : "attend"}
                      </button>

                      <Link
                        to={`/activities/${_id}`}
                        className="btn btn-outline-dark btn-sm btn-floating"
                      >
                        Details
                      </Link>
                      <Details userInfo={activity} />
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
