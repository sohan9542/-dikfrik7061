import { Component } from "react";
import { React, useState, useEffect } from "react";
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
// import faker from 'faker';
// import Cricle from "./../../Components/Circle"
import Slider from "react-slick";
// import "./Largeslider.css"
import "./full.css";
import home from "./../../Images/MAIN LOFT.jpg";
import Bird from "./../../Images/tbtrtt.jpg";
import timer from "./../../Images/45F6G5.jpg";
import money from "./../../Images/money.png";
import BarChart from "react-svg-bar-chart";
import Pigeon from "./../../Images/pigeon.png";
import p from "./../../Images/p.jpg";
import LAW from "./../../Images/LAW.png";
import gold from "./../../Images/goldf.webp";
import Canada from "./../../Images/canada.jpg";
import redblue from "./../../Images/BELGIUM.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";

import { width } from "@mui/system";
const data = [];

for (let x = 1; x <= 10; x++) {
  data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

const Full = ({
  controllFull,
  setControllFull,
  setControllFull2,
  viewp,
  setViewp,
}) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 994,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useEffect(() => {
 if(viewp){
  setShow(true)
  setViewp(false)
 }
  }, [viewp])
  
  return (
    <div id="mainfull">
      <div id="mainfuldivm">
        <div id="haffuldiv">
          <Container>
            <div className="put_grid">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{ width: "30px", objectFit: "contain" }}
                  src={home}
                />
                <h6 id="hafuldivtxt">MY LOFT FOR THIS RACE</h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <img src={Bird} />
                <h6 id="hafuldivtxt">
                  <span className="color">9</span> PIGEON/S IN BASKET
                </h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <h6 id="hafuldivtxt">
                  <span className="color">1</span> PIGEONS TO ADD
                </h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{
                    width: "30px",
                    objectFit: "contain",
                    marginRight: "3px",
                  }}
                  src={timer}
                />
                <h6 id="hafuldivtxt">
                  <span className="color">1250</span> CREDITs LEFT
                </h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{
                    width: "30px",
                    objectFit: "contain",
                    marginRight: "3px",
                  }}
                  src={gold}
                />
                <h6
                  onClick={() => setControllFull2(true)}
                  style={{ cursor: "pointer" }}
                  id="hafuldivtxt"
                >
                  BUY MORE CREDIT
                </h6>
              </div>
            </div>
            <div className="put_grid_mob">
              <div style={{ display: "flex", flexDirection: "row" }}>
            
                <h6 id="hafuldivtxt">MY LOFT FOR THIS RACE</h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
               
                <h6 id="hafuldivtxt">
                  <span className="color">9</span> PIGEON/S IN BASKET
                </h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
                <h6 id="hafuldivtxt">
                  <span className="color">1</span> PIGEONS TO ADD
                </h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
               
                <h6 id="hafuldivtxt">
                  <span className="color">1250</span> CREDITs LEFT
                </h6>
              </div>

              <div style={{ display: "flex", flexDirection: "row" }}>
               
                <h6
                  onClick={() => setControllFull2(true)}
                  style={{ cursor: "pointer" }}
                  id="hafuldivtxt"
                >
                  BUY MORE CREDIT
                </h6>
              </div>
            </div>
          </Container>
        </div>
        <div id="mainsld">
          <Modal show={show}>
            <Modal.Header style={{ backgroundColor: "#003a96" }}>
              <Modal.Title
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <div style={{ paddingBottom: "10px" }}>
                  <img
                    src={closeicon}
                    style={{ width: "30px", height: "27", left: "20" }}
                    onClick={() => setShow(false)}
                  />
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="graphmain">
              <div className="graphmiddl">
                <div className="graphlst">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "80px",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                        borderRadius: "50%",
                      }}
                      src={p}
                      alt=""
                    />
                    <p className="statsT" style={{ paddingTop: "5px" }}>
                      PIGEONS RACING STATS
                    </p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginBottom: "50px",
                      marginTop: "30px",
                    }}
                  >
                    <Container>
                      <Row>
                        <Col sm>
                          <div style={{ display: "flex" }}>
                            <img
                              style={{ width: "80px", objectFit: "contain" }}
                              src={Pigeon}
                            />
                            &nbsp; &nbsp;
                            <p className="BOTNAR">
                              <img
                                style={{ width: "40px" }}
                                src="https://static.wixstatic.com/media/416fe9_402d0ce51b33480eb622d873a0143918~mv2.png/v1/fill/w_33,h_33,al_c,lg_1,q_85,enc_auto/china.png"
                                alt=""
                              />
                              <br /> BOTNAR STEFAN
                              <br />
                              #003a96
                              <br />
                              CREDIT VALUE &nbsp; &nbsp;{" "}
                              <span className="Cvalue">347</span>
                            </p>
                          </div>
                        </Col>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Col sm>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <img
                              style={{ width: "60px", objectFit: "contain" }}
                              src={money}
                              alt=""
                            />
                            <div
                              style={{ width: 80, height: 80, color: "green" }}
                            >
                              <CircularProgressbar value={66} />
                            </div>
                          </div>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "red",
                              fontWeight: "500",
                              width: "100%",
                              paddingTop: "5px",
                              textAlign: "center",
                            }}
                          >
                            Average : 170.29
                          </p>
                        </Col>
                      </Row>
                    </Container>
                  </div>

                  <BarChart data={data} />
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <Modal show={show1}>
            <Modal.Header style={{ backgroundColor: "#003a96" }}>
              <Modal.Title
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <h3 className="Resell">Re-Sell Your Pigeon</h3>
                <div style={{ paddingBottom: "10px" }}>
                  <img
                    src={closeicon}
                    style={{ width: "30px", height: "27", left: "20" }}
                    onClick={() => setShow1(false)}
                  />
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="graphmain">
              <div className="grapiddl">
                <div id="lawmain">
                  <img src={LAW} className="lawimg" />
                </div>
                <Container style={{ width: "100%" }}>
                  <Row>
                    <Col sm>
                      <img src={Pigeon} />
                    </Col>
                    <Col sm>
                      <p className="canadatext">
                        &nbsp; &nbsp; &nbsp;{" "}
                        <img src={Canada} className="canadaimg" />
                        <br />
                        ALFONS KLAUS <br />
                        THE PIEGON NAME <br />
                        BX 233 E45455 <br />
                        THE PIEGON NAME <br />
                      </p>
                      {/* <br /> */}
                      <p className="seconcanadatx">
                        You Paid &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; <span className="numberred">456</span>
                        <br />
                        Current Value &nbsp; &nbsp; &nbsp;{" "}
                        <span className="numberred">4543</span>
                      </p>
                    </Col>
                  </Row>
                </Container>
                <div id="maindd">
                  <div id="half" style={{ padding: "0 20px" }}>
                    <p className="texttt">
                      IF YOU SELL KNOW YOU WILL GET <br />
                      <span style={{ color: "red", fontSize: "medium" }}>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4534
                      </span>{" "}
                      &nbsp; &nbsp; CREDITS
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    paddingBottom: "30px",
                  }}
                >
                  <button
                    onClick={() => {
                      setControllFull(true);
                      setShow1(false);
                    }}
                    className="sellpigeon"
                  >
                    SELL PIGEON
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Slider {...settings}>
            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>

            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>
            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>
            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>
            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>
            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>
            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>
            <div className="slidecrd">
              <div className="toppp">
                <span className="Rank">RAKING:</span>
                <div className="mainbox">
                  <span className="one1">1</span>
                </div>
                <div className="mainbox"></div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={Pigeon} className="pigeonn" />
                <p className="texxxt">
                  KUNAT <br />
                  All Neran Left <br />
                  KW WATANYA 21-798177
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p className="botomtex">
                  CREDIT VALLUE <br />
                  <span className="numbr">6898</span>
                  <br />
                  <button className="lastbutn" onClick={() => setShow(true)}>
                    {" "}
                    View Pigeon
                  </button>
                  <br />
                  <button className="lastbutn" onClick={() => setShow1(true)}>
                    Sell Pigeon
                  </button>
                </p>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    marginLeft: 20,
                    marginRight: -200,
                    marginTop: 20,
                  }}
                >
                  <CircularProgressbar value={70} />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Full;
