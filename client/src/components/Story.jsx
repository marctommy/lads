import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const Story = ({ user }) => {
  console.log(user);
  const { name, eventsAttended } = user;
  return (
    <div>
      <center>
        <div className="card story">
          <h1> Hello {name}</h1>
          {/* <p> You have attended {eventsAttended.length} Events.</p> */}
          {/* {eventsAttended?.map((oneEvent) => {
            <p key={user.eventsAttended.id}>
              {" "}
              You recently attended {oneEvent.name || "Event"}
            </p>;
          })} */}
          <Carousel>
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100"
                src={require("./assets/story_intro_1.webp")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Welcome to the LADs community!</h3>
                <p>Create an account. It is free and quick.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("./assets/wife.png")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>So many activities at your fingertip.</h3>
                <p>
                  To be in balance with your job, being a loving dad and person.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./assets/workout.gif")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>A happy wife means a happy relationship.</h3>
                <p>
                  Tap into your hobbies and skills experience fatherhood in a
                  completely new way!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </center>
    </div>
  );
};

export default Story;
