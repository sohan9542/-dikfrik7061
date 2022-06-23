import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../../Images/logo.png";
import livechat from "./../../Images/chatlive.png";
import message from "./../../Images/message 34.png";
import Profile from "./../../Images/PROFILEPIC.png";
import Logoutimg from "./../../Images/LOGOUT.png";
import logosignup from "./../../Images/fantasy league.jpg";
import { Link } from "react-router-dom";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
// import Signup from "./../../Components/SignUpLogn/Signup"
import {
  NavDropdown,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  Modal,
} from "react-bootstrap";
function MyNavbar({
  smShow,
  setSmShow,
  modaltype,
  setmodaltype,
  setIsAuthenticated,
}) {
  // function Example() {

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="Navbar"
        position="fixed"
      >
        <Container>
          <Navbar.Brand>
            <img src={Logo} className="logoweb" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <div className="pagesmain">
                  <img src={livechat} className="icons" />
                  <p className="navbarpages">LIVECHAT</p>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="pagesmain">
                  <img src={message} className="icons" />
                  <p className="navbarpages">MESSAGE</p>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="pagesmain">
                  <img src={Profile} className="icons" />
                  <p className="navbarpages">PROFILENAME</p>
                </div>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <div className="pagesmain">
                  <img src={Logoutimg} className="icons" />
                  <p className="navbarpages">LOGOUT</p>
                </div>
              </Nav.Link>
              <Nav.Link>
                <button
                  id="lognbutn"
                  onClick={() => {
                    setSmShow(true);
                    setmodaltype("login1");
                  }}
                >
                  Login
                </button>
              </Nav.Link>
              <Nav.Link>
                <button
                  id="signupbutn"
                  onClick={() => {
                    setSmShow(true);
                    setmodaltype("signup");
                  }}
                >
                  Sign Up
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Modal
          size="sm"
          show={smShow}
          // onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          id="modl"
        >
          <Modal.Header className="manButn">
            <Modal.Title id="example-modal-sizes-title-sm">
              <div style={{ display: "flex" }}>
                <div>
                  <button
                    className="LoginSignUp"
                    id="loginbtn"
                    onClick={() => setmodaltype("signup")}
                    style={{ color: modaltype === "signup" ? "red" : "white" }}
                  >
                    SIGN UP
                  </button>
                </div>
                <div style={{ display: "flex" }}>
                  <button
                    className="LoginSignUp"
                    onClick={() => setmodaltype("login1")}
                    style={{ color: modaltype === "login1" ? "red" : "white" }}
                  >
                    LOG IN{" "}
                  </button>
                  <img
                    src={closeicon}
                    className="close"
                    onClick={() => {
                      setSmShow(false);
                    }}
                  />
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ backgroundColor: "#003a96", marginTop: "-10px" }}
          >
            {modaltype === "login1" && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div id="signupline">Login On Compupigeon</div>

                  <img src={logosignup} id="signuplogo" />
                </div>
                <div className="signupmain" id="signinbtn">
                  <span className="inputtitle">Email Address*</span>
                  <input
                    type="email"
                    placeholder="Enter Address"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Enter Password*</span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="inputsignup"
                  />

                  <div id="forgotmain">
                    <div>
                      <input type="checkbox" />
                      <span className="inputtitle">Remember me</span>
                    </div>
                    <button onClick={() => setmodaltype("forget")} id="forgot">
                      Forgot Password
                    </button>
                  </div>
                  <div className="lastpricy">
                    <p className="lasttex">
                      Please read our Terms of Use and Privacy Policies
                    </p>
                    <button
                      className="lastsignbutn"
                      onClick={() => {
                        setSmShow(false);
                        setIsAuthenticated(true);
                      }}
                    >
                      LOGIN
                    </button>
                    <div>
                      <p style={{ fontSize: "small", color: "white" }}>
                        Not a member?{" "}
                        <a href="#" onClick={() => setmodaltype("signup")}>
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {modaltype === "signup" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                }}
                id="mainS"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div id="signupline">Register On Compupigeon</div>

                  <img src={logosignup} id="signuplogo" />
                </div>
                <div className="signupmain">
                  <span className="inputtitle">Enter your Name*</span>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Email Address*</span>
                  <input
                    type="email"
                    placeholder="Enter Address"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Enter Password*</span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="inputsignup"
                  />

                  <span className="inputtitle">Select your Country*</span>
                  <select className="inputsignup">
                    <option value="grapefruit">Afghanistan</option>
                    <option value="lime">Albania</option>
                    <option selected value="coconut">
                      Algeria
                    </option>
                    <option value="mango">Andorra</option>
                  </select>
                  <span className="inputtitle">Mobile Number*</span>
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Enter a loft Name*</span>
                  <input
                    type="text"
                    placeholder="Enter a loft Name*"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Select Your Outfit*</span>
                  <select className="inputsignup">
                    <option value="grapefruit">Yellow</option>
                    <option value="lime">Blue</option>
                    <option selected value="coconut">
                      white
                    </option>
                    <option value="mango">etc</option>
                  </select>

                  <div className="lastpricy">
                    <p className="lasttex">
                      Please read our Terms of Use and Privacy Policies
                    </p>
                    <button className="lastsignbutn">SIGN UP</button>
                  </div>
                </div>
              </div>
            )}
            {modaltype === "forget" && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div id="signupline">Forgot password</div>

                  <img src={logosignup} id="signuplogo" />
                </div>
                <div className="signupmain" id="signinbtn">
                  <span className="inputtitle">Email Address*</span>
                  <input
                    type="email"
                    placeholder="Enter Address"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Enter Password*</span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Confirm Password*</span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="inputsignup"
                  />

                  <div className="lastpricy">
                    <p className="lasttex">
                      Please read our Terms of Use and Privacy Policies
                    </p>
                    <button className="lastsignbutn">RESET </button>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
        {/* <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal> */}
      </Navbar>
    </div>
  );
}
export default MyNavbar;
