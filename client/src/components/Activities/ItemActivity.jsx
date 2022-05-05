import React from "react";
import { Link } from "react-router-dom";
import { Details } from "./Details";

export const ItemActivity = ({ activity }) => {
  // const { activity } = props

  const {
    _id,
    name,
    description,
    duration,
    location = "Berlin",
    date,
  } = activity;

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center h-60">
        <div className="col col-xl-10">
          <div className="card mb-5">
            <div className="card-body p-4">
              <h3 className="mb-3"> {name}</h3>
              <div className="small mb-0">
                <i className="far fa-star fa-lg"></i>
                created by user
                <div className="mx-2">|</div> In Berlin
                <strong> {duration}</strong> on Date {date || "Now"}
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
    </div>
  );
};
