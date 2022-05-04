import React from "react";
import { Link } from "react-router-dom";
export const ItemActivity = (props) => {
  console.log(props.listFromParent);

  return (
    <div>
      <div className="row d-flex justify-content-center align-items-center h-60">
        <div className="col col-xl-10">
          <div className="card mb-5">
            <div className="card-body p-4">
              <h3 className="mb-3"> {props.listFromParent.name}</h3>
              <div class="small mb-0">
                <i className="far fa-star fa-lg"></i>
                created by user
                <sdivan class="mx-2">|</sdivan> In Berlin
                <strong> {props.listFromParent.location}</strong> on Date{" "}
                {props.listFromParent.date}
                <div className="d-flex justify-content-start align-items-center">
                  <div className="mb-0 text-udivercase">
                    <span className="text-muted small">
                      Description:{props.listFromParent.description}:
                    </span>
                    <br />
                    <span className="text-muted small">Location:</span>
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm btn-floating"
                    >
                      Attend
                      <i className="fas fa-plus"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm btn-floating"
                    >
                      Send Message
                      <i className="fas fa-plus"></i>
                    </button>

                    <Link
                      to="/activities/:activityId"
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
