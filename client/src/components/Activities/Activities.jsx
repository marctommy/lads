import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./Activity.css";
import { FilterBtn } from "./FilterBtn";

const Activities = (props) => {
  const { loggedInUser } = props;
  return (
    <div>
      <Navbar isLoggedIn={!!loggedInUser}></Navbar>
      <Header />
      <FilterBtn />
      <section className="vh-100">
        <div className="row d-flex justify-content-center align-items-center h-60">
          <div className="col col-xl-10">
            <div className="card mb-5">
              <div className="card-body p-4">
                <h3 className="mb-3"> Activity Name</h3>
                <p class="small mb-0">
                  <i class="far fa-star fa-lg"></i>
                  {"Star Icon "}
                  <span class="mx-2">|</span> Created by
                  <strong> User</strong> on Date
                  <hr className="my-4"></hr>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0 text-uppercase">
                      <span class="text-muted small">Description:</span>
                    </p>
                    <br />
                    <p className="mb-0 text-uppercase">
                      <span class="text-muted small">Location:</span>
                    </p>

                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm btn-floating"
                    >
                      {" "}
                      Attend
                      <i class="fas fa-plus"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm btn-floating"
                    >
                      {" "}
                      Send Message
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Activities;
