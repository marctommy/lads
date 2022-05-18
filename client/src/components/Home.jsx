import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Buttons } from "./Activities/Buttons";
import "./Home.css";
import Story from "./Story";

const Home = (props) => {
  const { loggedInUser } = props;

  return (
    <div>
      <Story user={loggedInUser} />

      <Buttons />
    </div>
  );
};

export default Home;
