import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Buttons } from "./Activities/Buttons";
import "./Home.css";

const Home = (props) => {
  // console.log("props", props.loggedInUser?.name);
  const { loggedInUser } = props;
  return (
    <div>
      <h2>I am home</h2>
      <p> Hey {loggedInUser && loggedInUser.name}!</p>
      <p> {loggedInUser && "You are Logged in successfully"}</p>
      <Buttons />
    </div>
  );
};

export default Home;
