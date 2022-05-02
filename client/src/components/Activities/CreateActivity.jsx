import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const CreateActivity = (props) => {
  const { loggedInUser } = props;

  return (
    <>
      <Navbar isLoggedIn={!!loggedInUser}></Navbar>
      <Header />
      <form className="card">
        <label> New Activity</label>
      </form>
    </>
  );
};

export default CreateActivity;
