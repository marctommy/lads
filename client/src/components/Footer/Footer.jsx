import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div className="back">
      <Box style={{ bottom: 0 }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          the LADs - local awesome dads
        </h1>{" "}
        <h3 style={{ color: "white", textAlign: "center", paddingBottom: 50 }}>
          #1 growing dad social platform
        </h3>
        <Container>
          <Row>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="https://www.linkedin.com/in/marctommy/">
                Marc Tommy on LinkedIn
              </FooterLink>
              <img
                style={{
                  borderRadius: 100,
                  widht: 150,
                  height: 160,
                }}
                src={require("../assets/profile.gif")}
                alt="tag"
              />
            </Column>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
            </Column>

            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </FooterLink>
            </Column>
            <Column>
              <Heading>Friends</Heading>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>GetYourGuide</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Decathlon</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Elon Musk</span>
              </FooterLink>
              <FooterLink href="#">
                <span style={{ marginLeft: "10px" }}>Ironhack</span>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
