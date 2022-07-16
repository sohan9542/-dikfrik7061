import React, { useState } from "react";

import profle from "./../../Images/PROFILEPIC.jpg";
import homicon from "./../../Images/MAIN LOFT.jpg";
import bird from "./../../Images/home.webp";
import manimg from "./../../Images/yellow squares.jpg";
import belgium from "./../../Images/BELGIUM.jpg";
import Gold from "./../../Images/goldf.webp";
import cash from "./../../Images/cash.webp";
// import FlipCountdown from '@rumess/react-flip-countdown';
import Trophy from "./../../Images/TROPHY.jpg";
// import Gold from "./../../Images/goldf.jpg"
import { Container, Row, Col, Modal } from "react-bootstrap";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
import priceimg from "./../../Images/FTRTFB T.jpg";
import lastimg from "./../../Images/RGRDGBHREGVRE.jpg";
import card from "./../../Images/CRDBHRHB.jpg";

import "./sectiontwo.css";
function Section2({ smShow, setSmShow, modaltype, setmodaltype }) {
  return (
    <>
      <div id="sectionman">
        <div className="sLeft">
          <div id="racemain">
            <span className="rac">RACE #</span>
            <div id="boxx">
              <span id="boxxtx">17</span>
            </div>
          </div>

          <div>
            <h4 id="sectionhead">Pataya One Loft Race</h4>

            <div
              style={{
                paddingTop: "14px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div className="texx">
                <h6 style={{ fontSize: "13px" }}> Race Name: </h6>
                <h6 style={{ fontSize: "13px" }}> Distance: </h6>
                <h6 style={{ fontSize: "13px" }}> Liberation Date: </h6>
                <h6 style={{ fontSize: "13px" }}> Liberation Time: </h6>
              </div>
              <div className="texx" id="texxt">
                <h6 style={{ fontSize: "13px" }}> TRAINING RACE HILITO</h6>
                <h6 style={{ fontSize: "13px" }}>450</h6>
                <h6 style={{ fontSize: "13px" }}> Saturday, May 21, 2022,</h6>
                <h6 style={{ fontSize: "13px" }}>6:00:00 AM GMT+2</h6>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <img src={cash} className="tgold" />

              <span style={{ color: "#BADA55" }} className="grennum">
                $ 356
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <img
                style={{ width: "35px", objectFit: "contain" }}
                src={Gold}
                className="tgold"
              />

              <span style={{ color: "#BADA55" }} className="grennum">
                $ 356
              </span>
            </div>
          </div>
        </div>

        <div className=" sRight">
          <img src={bird} className="margin" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={belgium} id="belgum" />
            <img src={manimg} id="mannimg" />
            <p id="manntext">Juan s loft name</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p id="balnce">Balance</p>
            <div id="pric2main">
              <img style={{ width: "20px", objectFit: "contain" }} src={Gold} />
              <span id="pric2"> $ &nbsp; 450.00 </span>
            </div>
            <button
              className="ratd"
              onClick={() => {
                setSmShow(true);
                setmodaltype("wallet");
              }}
            >
              TOP OP WALLET
            </button>
            <button
              className="ratd"
              onClick={() => {
                setSmShow(true);
                setmodaltype("Withdraw");
              }}
            >
              WITHDRAW
            </button>
          </div>
        </div>
        <div className="sLeft__mob">
          <div id="racemain">
            <span className="rac">RACE #</span>
            <div id="boxx">
              <span id="boxxtx">17</span>
            </div>
          </div>

          <div className=" left_section">
            <h4 id="sectionhead">Pataya One Loft Race</h4>

            <div
              style={{
           
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="texx">
                <h6 style={{ fontSize: "13px" }}> Race Name: </h6>
                <h6 style={{ fontSize: "13px" }}> Distance: </h6>
                <h6 style={{ fontSize: "13px" }}> Liberation Date: </h6>
                <h6 style={{ fontSize: "13px" }}> Liberation Time: </h6>
              </div>
              <div className="texx" id="texxt">
                <h6 style={{ fontSize: "13px" }}> TRAINING RACE HILITO</h6>
                <h6 style={{ fontSize: "13px" }}>450</h6>
                <h6 style={{ fontSize: "13px" }}> Saturday, May 21, 2022,</h6>
                <h6 style={{ fontSize: "13px" }}>6:00:00 AM GMT+2</h6>
              </div>
            </div>
          </div>
        </div>
        <div className=" sRight__mob">
          <div>
            <p id="balnce">Balance</p>
            <div id="pric2main">
              <img style={{ width: "20px", objectFit: "contain" }} src={Gold} />
              <span id="pric2"> $ &nbsp; 450.00 </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              className="ratd"
              onClick={() => {
                setSmShow(true);
                setmodaltype("wallet");
              }}
            >
              TOP OP WALLET
            </button>
            <button
              className="ratd"
              onClick={() => {
                setSmShow(true);
                setmodaltype("Withdraw");
              }}
            >
              WITHDRAW
            </button>
          </div>
        </div>

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
                  <Container style={{ width: "100%", display: "flex" }}>
                    <div className=" col-5_mob">
                      <div>
                        <button className="amountb">30</button>
                      </div>
                      <div>
                        <button className="amountb">50</button>
                      </div>
                      <div>
                        <button className="amountb">100</button>
                      </div>
                      <div>
                        <button className="amountb">250</button>
                      </div>
                      <div>
                        <button className="amountb">500</button>
                      </div>
                    </div>
                  </Container>
                  <div id="maincard">
                    <img src={card} className="cardimg" />

                    <img src={priceimg} className="cardimg" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
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
                  <span style={{ fontWeight: "bold", marginLeft: "80px" }}>
                    {" "}
                    Balance
                  </span>
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; <img src={Gold} /> &nbsp; &nbsp;
                  &nbsp;{" "}
                  <span style={{ fontSize: "20px", fontWeight: "900" }}>
                    $ &nbsp; 450.00
                  </span>
                  <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp;Enter Withdrawn amount <br />
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
    </>
  );
}
export default Section2;
