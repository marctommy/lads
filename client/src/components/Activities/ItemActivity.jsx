import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Details } from "./Details";
import axios from "axios";

export const ItemActivity = ({ activity }) => {
  console.log("activity", activity);

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
                        Attend
                        <i className="fas fa-plus"></i>
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
