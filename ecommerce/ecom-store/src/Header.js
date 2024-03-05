import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarToggle } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import { control, user } from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Style.css";

function Header() {
  const { isLoggedIn, setLoggedIn } = useContext(control);
  const { LoginUser, setLoginUser } = useContext(user);

  const onLogout = () => {
    if (isLoggedIn) {
      toast.success("Successfully Sign Out...", {
        position: "top-center",
        onClose: () => {
          setLoggedIn(false);
          setLoginUser("Guest");
        },
      });
    }
  };

  return (
    <div>
      
        <div className="container py-1">
          <div className="row justify-content-between">
            <div className="d-flex col-xl-3 justify-content-center">
              <select
                className="form-select form-select-sm border-0 text-secondary sel"
                aria-label=".form-select-sm example"
                defaultValue="English" // Set the default value for the first select
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Spanish">Spanish</option>
              </select>

              <select
                className="form-select form-select-sm border-0 text-secondary sel"
                aria-label=".form-select-sm example"
                defaultValue="USD" // Set the default value for the second select
              >
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>

            <div className="d-flex gap-5 col-xl-5 justify-content-center">
              <div>
                <a className="text-secondary" href="">
                  Help
                </a>
              </div>
              <div>
                <a className="text-secondary" href="">
                  Join Us
                </a>
              </div>

              {isLoggedIn ? (
                <>
                  <div>
                    <button
                      onClick={onLogout}
                      className="text-secondary border-0 text-decoration-underline"
                      type="button"
                    >
                      Sign Out
                    </button>
                  </div>
                  <div className="d-flex align-content-center ">
                    <div className="firstletter text-white">
                      {LoginUser.charAt(8)}
                    </div>
                    <h4 className="text-black fw-bold">{LoginUser}</h4>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Link to="/register" className="text-secondary">
                      Sign up
                    </Link>
                  </div>
                  <div>
                    <Link to="/login" className="text-secondary">
                      Sign in
                    </Link>
                  </div>
                  <div className="d-flex align-content-center ">
                    <div className="firstletter text-white">G</div>
                    <h4 className="text-black fw-bold ">{LoginUser}</h4>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <Navbar expand="lg" className="head container fw-bold" >
          <Container>
            <Navbar.Brand href="#">
              <img
                src="/image/logo.png"
                style={{ height: 40, width: 150 }}
              />{" "}
            </Navbar.Brand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "500px" }}
              >
                <Link to="/" className="menu home">
                  Home
                </Link>
                <Link to="/shop" className="menu ">
                  Shop
                </Link>
                <Link to="/" className="menu">
                  Pages
                </Link>
                <Link to="/" className="menu">
                  About
                </Link>
                <Link to="/" className="menu">
                  Blog
                </Link>
                <Link to="/" className="menu">
                  Contact
                </Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

       
    
      <ToastContainer toastStyle={{ fontWeight: "bold", color: "green" }} />
    </div>
  );
}

export default Header;
