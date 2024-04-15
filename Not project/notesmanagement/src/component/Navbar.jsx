import React from "react";
import { Navbar, Nav, NavLink, NavDropdown, Container } from "react-bootstrap";

const AppNavbar = () => {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                  <Navbar.Brand>My Note-Taking App</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                      <Nav.Link href="/" as={NavLink}>
                        Notes
                      </Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link href="/profile" eventKey={2} as={NavLink}>
                        <i className="fas fa-user-circle"></i> Profile
                      </Nav.Link>
                      <NavDropdown title="Sign In" id="navbar-dropdown">
                        <NavDropdown.Item href="/faculty-login">
                          Faculty
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/student-login">
                          Student
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        );
      };

export default AppNavbar