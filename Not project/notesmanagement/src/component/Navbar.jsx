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
                      <NavDropdown title="Settings" id="navbar-dropdown">
                        <NavDropdown.Item href="#/settings/account">
                          Account Settings
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#/settings/appearance">
                          Appearance
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link eventKey={2} as={NavLink}>
                        <i className="fas fa-user-circle"></i> Profile
                      </Nav.Link>
                      <Nav.Link eventKey={2} as={NavLink} href="/login">
                        <i className="fas fa-sign-out-alt"></i> Login
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        );
      };

export default AppNavbar