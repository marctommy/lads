import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const Story = ({ user }) => {
  const { name, eventsAttended } = user;
  return (
    <div>
      <center>
        <div className="card story">
          <h1> Hello {name}</h1>
          {/* <p> You have attended {eventsAttended.length} Events.</p> */}
          <p> You recently attended {eventsAttended || "Event"}</p>
          <Carousel>
            <Carousel.Item interval={6000}>
              <img
                className="d-block w-100"
                src={require("./assets/story_intro_1.webp")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("./assets/wife.png")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("./assets/workout.gif")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
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
