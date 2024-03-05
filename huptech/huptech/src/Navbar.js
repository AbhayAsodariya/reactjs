import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Style.css";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold text-white">
            LOGO
          </Navbar.Brand>
          
          <Navbar.Toggle className="bg-white border-0 toggle" aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                Featured Properties
              </Nav.Link>
              <NavDropdown
                title={<span className="text-white">About Us</span>}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">one</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Two</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Three</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                className="text-white"
                title={<span className="text-white">Resources</span>}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">One</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Two</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Three</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-white" href="#pricing">
                Contact Us
              </Nav.Link>
              <Nav.Link className="text-white" href="#pricing">
                <i className="fa fa-phone" aria-hidden="true"></i> 407-634-2097
              </Nav.Link>
            </Nav>
            <Nav>
              <Button
                className="sell-btn fw-bold border-0 rounded-0 fs-6 py-3 px-4"
                size="lg"
                active
              >
                Sell Your Home
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
