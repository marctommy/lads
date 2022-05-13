import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const Story = ({ user }) => {
  console.log(user);
  const { name, eventsAttended } = user;
  return (
    <div>
      <center>
        <h1> Hello {name}</h1>
        {/* <p> You have attended {eventsAttended.length} Events.</p> */}
        {/* {eventsAttended?.map((oneEvent) => {
            <p key={user.eventsAttended.id}>
              {" "}
              You recently attended {oneEvent.name || "Event"}
            </p>;
          })} */}

        <Carousel className="card story" fade>
          <Carousel.Item interval={6000}>
            <img
              className="d-block w-100"
              src={require("./assets/welcome.gif")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Welcome to the LADs community!</h5>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              // src={require("./assets/findactivities.gif")}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Team up with other Dads!</h5>
              <p>
                Create your own super hero story outside of your stressful life
                as father.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src={require("./assets/superdads.gif")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>So many activities at your fingertip.</h5>
              <p>
                To be in balance with your job, being a loving dad and person.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src={require("./assets/wife.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h5>A happy wife means a happy relationship.</h5>
              <p>
                Tap into your hobbies and skills experience fatherhood in a
                completely new way!
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </center>
    </div>
  );
};

export default Story;
