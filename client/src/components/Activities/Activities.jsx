import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Activities = (props) => {
  const { loggedInUser } = props;
  return (
    <div>
      <Navbar isLoggedIn={!!loggedInUser}></Navbar>
      <Header />
      <h1>This is the List of all your Activities</h1>
      <button> Link</button>
    </div>
  );
};
export default Activities;
