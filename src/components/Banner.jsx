import React from "react";
import Button from "@material-ui/core/Button";
import { Col, Container, Row } from "react-bootstrap";
import "../css/banner.css";

const Banner = () => {
  return (
    <>
      <Container fluid className="middle-banner">
        <Row className="banner-wrapper"></Row>
        <Row className="h-100">
          <Container className="mx-auto">
            <Row className="h-100">
              <Col md={8} className="text-center flex-css">
                <h1> Learn web development or visit more projects ? </h1>
              </Col>
              <Col md={4} className="flex-css">
                <Button
                  href="#"
                  variant="contained"
                  className="visit-btn"
                  target="__blank"
                >
                  let's visit
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
