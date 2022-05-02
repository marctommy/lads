import React from "react";
import Navbar from "./Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import { Buttons } from "./Activities/Buttons";
import "./Home.css";

const Home = (props) => {
  console.log("props", props.loggedInUser?.name);
  const { loggedInUser } = props;
  return (
    <div>
      <Navbar isLoggedIn={!!loggedInUser}></Navbar>
      <Header />
      <h2>I am home</h2>
      <p> Hey {loggedInUser && loggedInUser.name}!</p>
      <p> {loggedInUser && "You are Logged in successfully"}</p>
      <Buttons />
    </div>
  );
};

export default Home;
