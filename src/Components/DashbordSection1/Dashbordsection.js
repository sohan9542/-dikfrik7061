import React, { useState } from "react";
import "./Section1.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import profle from "./../../Images/PROFILEPIC.jpg";
import homicon from "./../../Images/home.webp";
import bird from "./../../Images/evesbvseves (1).jpg";
import manimg from "./../../Images/yellow squares.jpg";
import belgium from "./../../Images/BELGIUM.jpg";
import Gold from "./../../Images/goldf.webp";
import FlipCountdown from "@rumess/react-flip-countdown";
import logosignup from "./../../Images/fantasy league.jpg";
import card from "./../../Images/CRDBHRHB.jpg";
import priceimg from "./../../Images/FTRTFB T.jpg";
import lastimg from "./../../Images/RGRDGBHREGVRE.jpg";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
import { Link } from "react-router-dom";
function Sec({smShow, setSmShow, modaltype, setmodaltype}) {
  return (
    <Container id="sectionmain">
      <div className="col_7">
        <div >
          <div id="profilepicman1">
            <img src={profle} id="profilepic1" />
          </div>
        </div>

        <div >
          <img
            src={homicon}
            style={{ width: "120px", marginTop: "20px", marginRight: "10px" }}
          />
        </div>
        <div  style={{ marginTop: "10px" }}>
          <p style={{ color: "white" }}>
            Welcome
            <h4 style={{ fontWeight: "bold" }}>Juan</h4>
            <span style={{ fontSize: "small" }}>Juan s loft name</span>
          </p>
        </div>
        <div >
          <div id="toptim">
            <h6 className="dsbd">MY DASHBOARD</h6>
          </div>
          <div id="next">
            <h6 className="dsbd">NEXT RACE</h6>
          </div>
          <FlipCountdown
            yearTitle="Year"
            monthTitle="Months"
            dayTitle="Days"
            hourTitle="Hours"
            minuteTitle="Minutes"
            secondTitle="Seconds"
            endAt={"2022-12-12 01:26:58"} // Date/Time
            hideYear
            hideMonth
            size="extra-small"
            titlePosition="bottom"
            theme={"light"}
            color="black"
          />
        </div>
        <div >
          <img src={bird} />
        </div>
        <div  id="manmain">
          <img src={belgium} id="belgium" />
          <img src={manimg} id="manimg" />
          <p id="mantext">Juan s loft name</p>
        </div>
        <div  style={{ marginTop: "-25px" }}>
          <div
            style={{
              display: "flex",
              JustifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p id="balance">Balance</p>
            <div id="price2main">
              <img style={{ width: "20px", objectFit: "contain" }} src={Gold} />
              <span id="price2"> $ &nbsp; 450.00 </span>
            </div>
            <div>
              <button
                className="rated"
                onClick={() => {
                  setSmShow(true);
                  setmodaltype("wallet");
                }}
              >
                TOP OP WALLET
              </button>
              <button
                className="rated"
                onClick={() => {
                  setSmShow(true);
                  setmodaltype("Withdraw");
                }}
              >
                WITHDRAW
              </button>

              <Modal
                size="sm"
                show={smShow}
                // onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header className="manButn">
                  <img
                    src={closeicon}
                    className="cse"
                    onClick={() => {
                      setSmShow(false);
                    }}
                  />
                  <div>
                    <img src={Gold} id="goldenicon" />
                    <button id="funfM">FUNDING MANAGEMENT</button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      <button
                        className="LognSignUp"
                        onClick={() => setmodaltype("Withdraw")}
                        style={
                          modaltype === "Withdraw"
                            ? {
                                backgroundColor: "#550d9c",
                                color: "#fff",
                              }
                            : {
                                backgroundColor: "white",
                              }
                        }
                      >
                        WITHDRAW
                      </button>
                    </div>
                    <div>
                      <button
                        className="LognSignUp"
                        style={
                          modaltype === "wallet"
                            ? {
                                backgroundColor: "#550d9c",
                                color: "#fff",
                              }
                            : {
                                backgroundColor: "white",
                              }
                        }
                        onClick={() => setmodaltype("wallet")}
                      >
                        DEPOSIT
                      </button>
                    </div>
                  </div>
                </Modal.Header>
                <Modal.Body
                  style={{ backgroundColor: "#003a96", marginTop: "-10px" }}
                >
                  {modaltype === "wallet" ? (
                    <div>
                      <div id="depostm">
                        <p id="amountT">SELECT YOUR AMOUNT</p>
                        <Container style={{ width: "100%" }}>
                          <div className="d-flex">
                           
                              <button className="amountb">30</button>
                          
                          
                              <button className="amountb">50</button>
                          
                              <button className="amountb">100</button>
                          
                          
                              <button className="amountb">250</button>
                         
                              <button className="amountb">500</button>
                        
                          </div>
                        </Container>
                        <div id="maincard">
                          <img src={card} className="cardimg" />

                          <img src={priceimg} className="cardimg" />
                        </div>
                        <div id="lastmn">
                          <button id="makeD">MAKE A DEPOSIT</button>
                          <br />
                          <p id="paypaltext">PAY USING PAYPAL</p>
                          <img src={lastimg} id="lastimg" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div id="withdrawM">
                      <p id="Awithdraw">
                        ENTER YOUR AMOUNT YOU WISH TO WITHDRAW
                        <br /> <br />{" "}
                        <span
                          style={{ fontWeight: "bold", marginLeft: "80px" }}
                        >
                          {" "}
                          Balance
                        </span>
                        <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; <img src={Gold} /> &nbsp;
                        &nbsp; &nbsp;{" "}
                        <span style={{ fontSize: "20px", fontWeight: "900" }}>
                          $ &nbsp; 450.00
                        </span>
                        <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;Enter Withdrawn amount <br />
                        <input
                          type="text"
                          placeholder="Enter Amount"
                          className="inputwithdraw"
                        />
                        <br /> <br />
                        <button className="lasywithdraw">WITHDRAW</button>
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="col_7_mob">
        <div >
          <div id="profilepicman1">
            <img src={profle} id="profilepic1" />
          </div>
        </div>

      
      <div className=" sec1">
      <img src={belgium} id="belgium" />
        <img src={manimg} id="manimg" />
      </div>
   
        <div  id="manmain">
    
         <p className="welcome ">Welcome</p>
         <p className="name">Juan</p>
          <p id="mantext">Juan s loft name</p>
        </div>
        <div  style={{ marginTop: "-25px" }}>
          <div
            style={{
              display: "flex",
              JustifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p id="balance">Balance</p>
            <div id="price2main">
              <img style={{ width: "20px", objectFit: "contain" }} src={Gold} />
              <span id="price2"> $ &nbsp; 450.00 </span>
            </div>
            <div>
            <button
                className="rated"
                onClick={() => {
                  setSmShow(true);
                  setmodaltype("Withdraw");
                }}
              >
                WITHDRAW
              </button>
              <button
                className="rated"
                onClick={() => {
                  setSmShow(true);
                  setmodaltype("wallet");
                }}
              >
                TOP OP WALLET
              </button>
         

              <Modal
                size="sm"
                show={smShow}
                // onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header className="manButn">
                  <img
                    src={closeicon}
                    className="cse"
                    onClick={() => {
                      setSmShow(false);
                    }}
                  />
                  <div>
                    <img src={Gold} id="goldenicon" />
                    <button id="funfM">FUNDING MANAGEMENT</button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      <button
                        className="LognSignUp"
                        onClick={() => setmodaltype("Withdraw")}
                        style={
                          modaltype === "Withdraw"
                            ? {
                                backgroundColor: "#550d9c",
                                color: "#fff",
                              }
                            : {
                                backgroundColor: "white",
                              }
                        }
                      >
                        WITHDRAW
                      </button>
                    </div>
                    <div>
                      <button
                        className="LognSignUp"
                        style={
                          modaltype === "wallet"
                            ? {
                                backgroundColor: "#550d9c",
                                color: "#fff",
                              }
                            : {
                                backgroundColor: "white",
                              }
                        }
                        onClick={() => setmodaltype("wallet")}
                      >
                        DEPOSIT
                      </button>
                    </div>
                  </div>
                </Modal.Header>
                <Modal.Body
                  style={{ backgroundColor: "#003a96", marginTop: "-10px" }}
                >
                  {modaltype === "wallet" ? (
                    <div>
                      <div id="depostm">
                        <p id="amountT">SELECT YOUR AMOUNT</p>
                        <Container style={{ width: "100%" }}>
                        <div className="d-flex mt-2" style={{ width: "100%", justifyContent:"space-around" }}>
                           
                           <button className="amountb">30</button>
                       
                       
                           <button className="amountb">50</button>
                       
                           <button className="amountb">100</button>
                       
                       
                           <button className="amountb">250</button>
                      
                           <button className="amountb">500</button>
                     
                       </div>
                        </Container>
                        <div id="maincard">
                          <img src={card} className="cardimg" />

                          <img src={priceimg} className="cardimg" />
                        </div>
                        <div style={{ width: "100%", display:"flex", alignItems:"center", flexDirection:"column" }}>
                          <button id="makeD">MAKE A DEPOSIT</button>
                     
                          <p id="paypaltext">PAY USING PAYPAL</p>
                          <img src={lastimg} id="lastimg" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div id="withdrawM">
                      <p id="Awithdraw">
                        ENTER YOUR AMOUNT YOU WISH TO WITHDRAW
                        <br /> <br />{" "}
                        <span
                          style={{ fontWeight: "bold", marginLeft: "80px" }}
                        >
                          {" "}
                          Balance
                        </span>
                        <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; <img src={Gold} /> &nbsp;
                        &nbsp; &nbsp;{" "}
                        <span style={{ fontSize: "20px", fontWeight: "900" }}>
                          $ &nbsp; 450.00
                        </span>
                        <br />
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;Enter Withdrawn amount <br />
                        <input
                          type="text"
                          placeholder="Enter Amount"
                          className="inputwithdraw"
                        />
                        <br /> <br />
                        <button className="lasywithdraw">WITHDRAW</button>
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default Sec;
