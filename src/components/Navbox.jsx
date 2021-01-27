import React from "react";
import {NavLink} from 'react-router-dom';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../css/nav.css";

const Navbox = () => {
  return (
    <>
      <Container fluid className="nav-container">
        <Row>
          <Col md="10" className="mx-auto">
            <Navbar expand="sm">
              <Navbar.Brand href="#home">3GAG</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavLink className="main-link" to="/home">
                    Home
                  </NavLink>
                  <NavLink className="main-link" to = "/about">
                    About
                  </NavLink>
                  <NavLink className="main-link" to = "/gadgets">
                    Gadgets
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbox;
