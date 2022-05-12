import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Buttons } from "./Activities/Buttons";
import "./Home.css";
import Story from "./Story";

const Home = (props) => {
  // console.log("props", props.loggedInUser?.name);
  const { loggedInUser } = props;
  return (
    <div>
      <Story user={loggedInUser} />

      {/* <p> Hey {loggedInUser && loggedInUser.name}!</p>
    <p> {loggedInUser && "You are Logged in successfully"}</p> */}
      <Buttons />
    </div>
  );
};

export default Home;
