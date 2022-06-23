import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Slide1pic from "./../../Images/slide1.jpg";
import Slide4pic from "./../../Images/IMG-20220523-WA0003.jpg";
import Slider2pic from "./../../Images/slid2.jpg";
import SlideIcon from "./../../Images/nnmmkk (1).png";
import SlideIcon1 from "./../../Images/ertw4gfvwf.webp";
import playstore from "./../../Images/playstore.webp";
import cup from "./../../Images/cup.webp";
import SlideIcon2 from "./../../Images/s2.webp";
import SlideIcon3 from "./../../Images/s3.webp";
import { Link } from "react-router-dom";
import logosignup from "./../../Images/fantasy league.jpg";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
import {
  NavDropdown,
  Nav,
  Form,
  FormControl,
  onHide,
  Button,
  Navbar,
  Modal,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./slider.css";
// import { Container, Row, Col } from "react-bootstrap";

function Slider() {
  const [smShow, setSmShow] = useState(false);
  const [modaltype, setmodaltype] = useState("login1");
  return (
    <div>
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
              <div>
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
        <Modal.Body style={{ backgroundColor: "#003a96", marginTop: "-10px" }}>
          {modaltype === "login1" ? (
            <div>
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
                  <button id="forgot">Forgot Password</button>
                </div>
                <div className="lastpricy">
                  <p className="lasttex">
                    Please read our Terms of Use and Privacy Policies
                  </p>
                  <button className="lastsignbutn">LOGIN</button>
                  <div>
                    <p style={{ fontSize: "small", color: "white" }}>
                      Not a member? <Link to="#mainS">Register</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
              }}
              id="mainS"
            >
              <p id="signtext">Register On Compupigeon</p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "-30px",
                }}
              >
                <div id="signupline"></div>
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
        </Modal.Body>
      </Modal>

      <div style={{ marginTop: 100 }}>
        <Carousel variant="dark">
          <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src={Slide2pic}
            alt="Second slide"
          /> */}
            {/* <Carousel.Caption className="MainCarsol"> */}
            <div
              style={{
                backgroundImage: `url(${Slide1pic})`,
                backgroundRepeat: "no-repeat",
              }}
              className="_item_img"
            >
              <Container>
                <Row>
                  <Col xs={1}>
                    <div>
                      {/* <img src={SlideIcon} className="iconslide1" /> */}
                    </div>
                  </Col>
                  <Col xs={6}>
                    <br />
                    <div>
                      <br />
                      <br />
                      <p className="slideteaxt">
                        One Loft Pigeon Daily Fantasy Racing is Here
                      </p>
                      <p className="secndtext">
                        A NEW <br />
                        WAY TO TRUIMPH <br />
                        THE SKY WITH VIRTUAL ONE LOFT <br />
                        RACING <br />
                        <button
                          className="startbtn"
                          onClick={() => {
                            setSmShow(true);
                          }}
                        >
                          Get Started Now
                        </button>
                        
                      </p>
                      <img src={playstore} className="play"  alt="" />
                    </div>
                  </Col>
                  <Col xs={5}>
                    <div>
                      <img src={SlideIcon} className="iconslide1" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*
             */}

            {/* </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src={Slide2pic}
            alt="Second slide"
          /> */}
            {/* <Carousel.Caption className="MainCarsol"> */}
            <div
              style={{
                backgroundImage: `url(${Slide1pic})`,
                backgroundRepeat: "no-repeat",
              }}
              className="_item_img"
            >
              <Container>
                <Row>
                  <Col xs={6}>
                    <br />
                    <div style={{ position: "relative" }}>
                      <br />
                      <br />
                      <p className="slideteaxt">
                        Real Pigeons, Real Races Real Money
                      </p>

                      <p className="secndtext">
                        A NEW <br />
                        WAY TO TRUIMPH <br />
                        THE SKY WITH VIRTUAL ONE LOFT <br />
                        RACING <br />
                        <img src={playstore} className="play"  alt="" />
                        <br />
                        <br />
                        <button
                          className="startbtn"
                          onClick={() => {
                            setSmShow(true);
                          }}
                        >
                          Start Racing
                        </button>
                      </p>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <img src={SlideIcon1} className="iconslide2" />
                  </Col>
                </Row>
              </Container>
            </div>
            {/*
             */}

            {/* </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src={Slide2pic}
            alt="Second slide"
          /> */}
            {/* <Carousel.Caption className="MainCarsol"> */}
            <div
              style={{
                backgroundImage: `url(${Slide1pic})`,
                backgroundRepeat: "no-repeat",
              }}
              className="_item_img"
            >
              <Container>
                <div className="slider3">
                  <img src={SlideIcon2} className="iconslide3" />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                     <img src={cup} className=" cup"  alt="" />
                    <p
                      style={{ textAlign: "center", }}
                      className="slideteaxt w-400"
                      id="slidetextID"
                    >
                      Enter Various <br /> One Loft Races
                    </p>
                    <p
                      style={{ textAlign: "center" }}
                      className="secndtext"
                      id="secndtextID"
                    >
                      AND STAND A CHANCE <br /> TO WIN BIG!
                    </p>
                    <button
                      className="startbtn"
                      onClick={() => {
                        setSmShow(true);
                      }}
                    >
                      Start Racing Now
                    </button>
                    <img src={playstore} className="play"  alt="" />
                  </div>

                  <img src={SlideIcon3} className="iconslide4" />
                </div>
              </Container>
            </div>
            {/*
             */}

            {/* </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Slider;
