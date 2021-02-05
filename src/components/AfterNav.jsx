import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "../css/nav.css";

const AfterNav = () => {
  return (
    <>
      <Container fluid className="nav-container">
        <Row>
          <Col md="10" className="mx-auto">
            <Navbar expand="lg">
              <Navbar.Brand href="#home">3GAG</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="main-link" href="#home">
                    Home
                  </Nav.Link>
                  <Nav.Link className="main-link" href="#link">
                    About
                  </Nav.Link>
                  <Nav.Link className="main-link" href="#link">
                    Gadgets
                  </Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                  <Nav.Link className="after-link" href="#home">
                    Profile <AccountCircleIcon />
                  </Nav.Link>
                  <Nav.Link className="after-link" href="#link">
                    Your Cart <ShoppingCartIcon />
                  </Nav.Link>
                  <Nav.Link className="after-link" href="#link">
                    Log Out <ExitToAppIcon />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AfterNav;
