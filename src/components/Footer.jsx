import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import icon from "../images/static/footerIcon.png";
import flag from "../images/static/flag.gif";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer-banner">
        <Row className="h-100">
          <Container className="mx-auto">
            <Row className="h-100">
              <Col md={4} className="flex-css">
                <h1 className="footer-heading flex-css-row">
                  <img src={icon} alt="icon" />
                  <p> GAG </p>
                </h1>
              </Col>
              <Col md={4} className="copyright-heading flex-css-column">
                <p>&copy; 2021 All rights reserved</p>
                <span>
                  Developed by <a href="">SP7</a> & <a href="">SS21</a>
                  <img src={flag} alt="flag" />
                </span>
              </Col>
              <Col md={4} className="footer-link flex-css-row">
                <a href="">
                  <FacebookIcon className="footer-icon" />
                </a>
                <a href="">
                  <InstagramIcon className="footer-icon" />
                </a>
                <a href="">
                  <YouTubeIcon className="footer-icon" />
                </a>
                <a href="">
                  <LinkedInIcon className="footer-icon" />
                </a>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
