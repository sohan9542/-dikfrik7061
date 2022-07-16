import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  NavDropdown,
  Nav,
  Form,
  FormControl,
  onHide,
  Button,
  flase,
  Navbar,
  Modal,
  Table,
} from "react-bootstrap";
import "./Vsection.css";
import truck from "./../../Images/truck open (1).png";
import Vsectimg from "./../../Images/12.png";

import happy from "./../../Images/happy.webp";
import pigeons from "./../../Images/line/pigeons.png";
import basket from "./../../Images/line/basket.png";
import truck1 from "./../../Images/line/truck.png";
import camera from "./../../Images/line/camera.png";
import jerseys from "./../../Images/line/jerseys.png";
import trophy from "./../../Images/line/trophy.png";
import flags from "./../../Images/line/flags.png";
import Video from "./../../Images/VID-20220528-WA0009.mp4";
import inslide from "./../../Images/inslide.jpg";
import china from "./../../Images/china.jpg";
import fantasy from "./../../Images/fantasy league.jpg";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
import { fontWeight } from "@mui/system";

function Vsection({
  setSmShow1,
  controllFull,
  setmodaltype1,
  setControllFull,
  controllFull2,
  setControllFull2,
  viewp,
  setViewp,
}) {
  const [smShow, setSmShow] = useState(false);
  const [mgshow, setMgShow] = useState(false);
  const [xmShow, setXmShow] = useState(false);
  const [dmShow, setDmShow] = useState(false);
  const [cmShow, setCmShow] = useState(false);
  const [cmShow2, setCmShow2] = useState(false);
  const [cmShow3, setCmShow3] = useState(false);
  const [cmShow4, setCmShow4] = useState(false);
  const [cmShow5, setCmShow5] = useState(false);
  const [buy, setBuy] = useState(false);
  const [buy2, setBuy2] = useState(false);
  useEffect(() => {
    if (controllFull) {
      setSmShow(true);
      setControllFull(false);
    }
    if (controllFull2) {
      setDmShow(true);
      setControllFull2(false);
    }
  }, [controllFull, controllFull2]);

  return (
    <div id="videosectionmain" style={{ marginBottom: "50px" }}>
      <Modal
        size="sm"
        show={dmShow}
        // onHide={() => setDmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
            <button className="enteracebtn">GET CREDITS</button>
            <img src={fantasy} style={{ width: "50px" }} />
            <div>
              <img
                src={closeicon}
                className="ose"
                onClick={() => {
                  setDmShow(false);
                }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {buy === false ? (
            <div>
              <div className="middlbody">
                <div className="lastbody" style={{height:"385px"}}>
                  <div className="mainFee">
                    <p className="Fee">GET CREDITS </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                      <span style={{ fontSize: "x-small" }}>
                        {" "}
                        &nbsp; &nbsp; &nbsp; &nbsp; Balance
                      </span>
                      <br />
                      <span style={{ fontWeight: "900", fontSize: "large" }}>
                        $ 450.00 <br />
                      </span>
                    </p>
                    <br />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <h6 id="CreditR">Select Credits Required</h6>
                    <select id="inputgnup">
                      <option value="grapefruit">
                        Get 1000 credist for $ 10 dollor
                      </option>
                      <option value="lime">
                        Get 1000 credist for $ 10 dollor
                      </option>
                      <option selected value="coconut">
                        Get 1000 credist for $ 10 dollor
                      </option>
                      <option value="mango">
                        Get 1000 credist for $ 10 dollor
                      </option>
                    </select>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "20px",
                    }}
                  >
                    <button onClick={() => setBuy(true)} id="enterrc">
                      BUY CREDITS
                    </button>
                    <button
                      onClick={() => {
                        setDmShow(false);
                        setSmShow1(true);
                        setmodaltype1("wallet");
                      }}
                      id="enterrcGreen"
                    >
                      TOP UP WALLET
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                background: "white",
                padding: "15px",
                borderRadius: "20px",
                position: "relative",
              }}
            >
              <h1
                style={{
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "#BADA55",
                  paddingTop: "30px ",
                  textAlign: "center",
                }}
              >
                PAYMENT SUCCESFULL
              </h1>
              <div
                style={{
                  paddingTop: "20px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={happy} alt="" />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <buttton
                    style={{
                      padding: "6px 10px ",
                      borderRadius: "20px",
                      background: "#003a96",
                      color: "white",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setDmShow(false);
                      setBuy(false);
                    }}
                  >
                    GO BACK
                  </buttton>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={cmShow}
        // onHide={() => setCmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
            <button className="enteracebtn">SELECT RACE</button>
            <img src={fantasy} style={{ width: "50px" }} />
            <div>
              <img
                src={closeicon}
                className="ose"
                onClick={() => {
                  setCmShow(false);
                }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mainbody">
          <div
            className="middbody"
            style={{ height: "400px", overflowY: "scroll" }}
          >
            <div className="lastbodycard">
              <div
                style={{
                  marginLeft: "7px",
                  display: "flex",
                  paddingTop: "10px",
                }}
              >
                <img src={china} style={{ width: "30px", height: "30px" }} />
                <p
                  className="patya"
                  style={{ color: "black", marginLeft: "5px" }}
                >
                  PATAYA ONE LOFT <br />
                  27 MAY 2023 06H00
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img src={inslide} className="imgsiz" />
                <p className="recivetext">
                  LOFT PEARCH FEE <br />
                  <span className="redcolr"> $ 30 </span>
                  <br />
                  # OF PIGEONS ENTERED
                  <br />
                  <span className="redcolr">3000 </span>
                  <br />
                  FREE CREDITS RECEIVE
                  <br />
                  <span className="redcolr"> 6578</span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <button className="loftbtn">ENETR LOFT FOR THIS RACE</button>
              </div>
            </div>

            <div className="lastbodycard">
              <div
                style={{
                  marginLeft: "7px",
                  display: "flex",
                  paddingTop: "10px",
                }}
              >
                <img src={china} style={{ width: "30px", height: "30px" }} />
                <p
                  className="patya"
                  style={{ color: "black", marginLeft: "5px" }}
                >
                  PATAYA ONE LOFT <br />
                  27 MAY 2023 06H00
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img src={inslide} className="imgsiz" />
                <p className="recivetext">
                  LOFT PEARCH FEE <br />
                  <span className="redcolr"> $ 30 </span>
                  <br />
                  # OF PIGEONS ENTERED
                  <br />
                  <span className="redcolr">3000 </span>
                  <br />
                  FREE CREDITS RECEIVE
                  <br />
                  <span className="redcolr"> 6578</span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <button className="loftbtn">ENETR LOFT FOR THIS RACE</button>
              </div>
            </div>

            <div className="lastbodycard">
              <div
                style={{
                  marginLeft: "7px",
                  display: "flex",
                  paddingTop: "10px",
                }}
              >
                <img src={china} style={{ width: "30px", height: "30px" }} />
                <p
                  className="patya"
                  style={{ color: "black", marginLeft: "5px" }}
                >
                  PATAYA ONE LOFT <br />
                  27 MAY 2023 06H00
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <img src={inslide} className="imgsiz" />
                <p className="recivetext">
                  LOFT PEARCH FEE <br />
                  <span className="redcolr"> $ 30 </span>
                  <br />
                  # OF PIGEONS ENTERED
                  <br />
                  <span className="redcolr">3000 </span>
                  <br />
                  FREE CREDITS RECEIVE
                  <br />
                  <span className="redcolr"> 6578</span>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <button className="loftbtn">ENETR LOFT FOR THIS RACE</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="md"
        show={cmShow2}
        // onHide={() => setCmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
          <div className="modal_desk" style={{ padding: "8px", gap: "10px" }}>
              <div>
                <h6 style={{ fontWeight: "500", color: "white" }}>RACE</h6>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  17
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={china}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "18px",
                    }}
                  />
                  <h6 className="live_stream" style={{ color: "white" }}>LIVE STREAM</h6>
                </div>
                <div
                  style={{
                    display: "flex",

                    gap: "10px",
                  }}
                >
                  <img
                    src={inslide}
                    style={{ width: "50px", height: "50px" }}
                    className="imgsiz"
                  />
                  <div>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Race Name:
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Distance
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Liberation Date and Time:
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <h6
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingTop: "8px",
                  }}
                >
                  PATAYA ONE LOFT
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>
                  TRAINING RACE HILITO
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>345</h6>

                <h6 style={{ color: "white", fontSize: "12px" }}>
                  Saturday, May 21, 2022, 6:00:00 AM GMT+2
                </h6>
              </div>
            </div>
            <div className=" modal_mob" style={{ padding: "8px", gap: "10px" }}>
              <div>
                <h6 style={{ fontWeight: "500", color: "white" }}>RACE</h6>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  17
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img
                    src={china}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "18px",
                    }}
                  />
                    <img
                    src={inslide}
                    style={{ width: "50px", height: "50px" }}
                    className="imgsiz"
                  />
                    
                </div>
                {/* <div
                  style={{
                    display: "flex",

                    gap: "10px",
                  }}
                >
                
                  <div>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Race Name:
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Distance
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Liberation Date and Time:
                    </h6>
                  </div>
                </div> */}
              </div>
              <div>
              <h6
                  style={{
                    color: "white",
                    fontSize: "14px",
                    paddingTop: "8px",
                    fontWeight:"700"
                  }}
                >
                 LIVE STREAM
                </h6>
                <h6  style={{ color: "white", fontSize: "12px", marginBottom:"0" }}>
                  Race: <br /> 
                  PATAYA ONE LOFT RACE
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>
                  Race Name: <br /> 
                  PATAYA ONE LOFT RACE
                </h6>
                
              </div>
            </div>
            <div>
              <img
                src={closeicon}
                className="ose"
                onClick={() => {
                  setCmShow2(false);
                }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video width="100%" style={{ objectFit: "cover" }} controls>
            <source src={Video} />
          </video>
        </Modal.Body>
      </Modal>
      <Modal
        size="md"
        show={cmShow3}
        // onHide={() => setCmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
            <div style={{ padding: "8px", display: "flex", gap: "10px" }}>
              <div>
                <h6 style={{ fontWeight: "500", color: "white" }}>RACE</h6>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  17
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={china}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "18px",
                    }}
                  />
                  <h6 className="live_stream"  style={{ color: "white" }}>LIVE STREAM</h6>
                </div>
                <div
                  style={{
                    display: "flex",

                    gap: "10px",
                  }}
                >
                  <img
                    src={inslide}
                    style={{ width: "50px", height: "50px" }}
                    className="imgsiz"
                  />
                  <div>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Race Name:
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Distance
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Liberation Date and Time:
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <h6
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingTop: "8px",
                  }}
                >
                  PATAYA ONE LOFT
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>
                  TRAINING RACE HILITO
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>345</h6>

                <h6 style={{ color: "white", fontSize: "12px" }}>
                  Saturday, May 21, 2022, 6:00:00 AM GMT+2
                </h6>
              </div>
            </div>
            <div>
              <img
                src={closeicon}
                className="ose"
                onClick={() => {
                  setCmShow3(false);
                }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: "450px", overflowY: "scroll" }}>
            <Table responsive>
              <tbody>
                {[11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n) => (
                  <tr>
                    <td style={{ fontSize: "12px" }}>
                      <img
                        style={{ width: "18px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_3c3c6f9e17f1491c96f4e38a5fe47c9c~mv2.png/v1/fill/w_68,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/yellow%20squares.png"
                        alt=""
                      />
                    </td>
                    <td style={{ fontSize: "12px" }}>
                      <img
                        style={{ width: "18px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_cd825177b4d14a7a9ea5e7def3d05736~mv2.png/v1/fill/w_29,h_29,al_c,lg_1,q_85,enc_auto/BELGIUM.png"
                        alt=""
                      />
                    </td>

                    <td style={{ fontSize: "12px" }}>Maggy</td>
                    <td style={{ fontSize: "12px" }}>LUBSHCHER</td>
                    <td style={{ fontSize: "12px" }}>
                      <img
                        style={{ width: "18px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_ceb66987863240d395b0511c7bad1420~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tbtrtt.png"
                        alt=""
                      />
                    </td>
                    <td style={{ fontSize: "12px" }}>#</td>
                    <td style={{ fontSize: "12px" }}>1245</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="md"
        show={cmShow4}
        // onHide={() => setCmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
            <div style={{ padding: "8px", display: "flex", gap: "10px" }}>
              <div>
                <h6 style={{ fontWeight: "500", color: "white" }}>RACE</h6>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  17
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={china}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "18px",
                    }}
                  />
                  <h6 className="live_stream" style={{ color: "white" }}>LIVE STREAM</h6>
                </div>
                <div
                  style={{
                    display: "flex",

                    gap: "10px",
                  }}
                >
                  <img
                    src={inslide}
                    style={{ width: "50px", height: "50px" }}
                    className="imgsiz"
                  />
                  <div>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Race Name:
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Distance
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Liberation Date and Time:
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <h6
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingTop: "8px",
                  }}
                >
                  PATAYA ONE LOFT
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>
                  TRAINING RACE HILITO
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>345</h6>

                <h6 style={{ color: "white", fontSize: "12px" }}>
                  Saturday, May 21, 2022, 6:00:00 AM GMT+2
                </h6>
              </div>
            </div>
            <div>
              <img
                src={closeicon}
                className="ose"
                onClick={() => {
                  setCmShow4(false);
                }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: "450px", overflowY: "scroll" }}>
            <Table responsive>
              <tbody>
                {[11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n) => (
                  <tr>
                    <td style={{ fontSize: "12px" }}>
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          background: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          border: "1px solid #000",
                          color: "red",
                          borderRadius: "4px",
                        }}
                      >
                        17
                      </div>
                    </td>
                    <td
                      style={{ fontSize: "12px", display: "flex", gap: "10px" }}
                    >
                      <img
                        style={{ width: "30px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_3c3c6f9e17f1491c96f4e38a5fe47c9c~mv2.png/v1/fill/w_68,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/yellow%20squares.png"
                        alt=""
                      />
                      <img
                        style={{ width: "18px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_cd825177b4d14a7a9ea5e7def3d05736~mv2.png/v1/fill/w_29,h_29,al_c,lg_1,q_85,enc_auto/BELGIUM.png"
                        alt=""
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "13px" }}>Lorem</span>
                        <span style={{ fontSize: "10px" }}>#kayra</span>
                        <span style={{ fontSize: "10px" }}>vay yan</span>
                      </div>
                    </td>

                    <td style={{ fontSize: "14px" }}>
                      <img
                        style={{ width: "40px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_ceb66987863240d395b0511c7bad1420~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tbtrtt.png"
                        alt=""
                      />
                      # 9
                    </td>

                    <td
                      style={{
                        fontSize: "12px",
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      1245
                    </td>
                    <td style={{ fontSize: "12px", fontWeight: "600" }}>
                      {" "}
                      $ <span style={{ color: "#0eaa3a" }}>1245</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="md"
        show={cmShow5}
        // onHide={() => setCmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
            <div className="modal_desk" style={{ padding: "8px", gap: "10px" }}>
              <div>
                <h6 style={{ fontWeight: "500", color: "white" }}>RACE</h6>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  17
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={china}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "18px",
                    }}
                  />
                  <h6 className="live_stream" style={{ color: "white" }}>LIVE STREAM</h6>
                </div>
                <div
                  style={{
                    display: "flex",

                    gap: "10px",
                  }}
                >
                  <img
                    src={inslide}
                    style={{ width: "50px", height: "50px" }}
                    className="imgsiz"
                  />
                  <div>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Race Name:
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Distance
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Liberation Date and Time:
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <h6
                  style={{
                    color: "white",
                    fontSize: "12px",
                    paddingTop: "8px",
                  }}
                >
                  PATAYA ONE LOFT
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>
                  TRAINING RACE HILITO
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>345</h6>

                <h6 style={{ color: "white", fontSize: "12px" }}>
                  Saturday, May 21, 2022, 6:00:00 AM GMT+2
                </h6>
              </div>
            </div>
            <div className=" modal_mob" style={{ padding: "8px", gap: "10px" }}>
              <div>
                <h6 style={{ fontWeight: "500", color: "white" }}>RACE</h6>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "red",
                  }}
                >
                  17
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img
                    src={china}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "18px",
                    }}
                  />
                    <img
                    src={inslide}
                    style={{ width: "50px", height: "50px" }}
                    className="imgsiz"
                  />
                    
                </div>
                {/* <div
                  style={{
                    display: "flex",

                    gap: "10px",
                  }}
                >
                
                  <div>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Race Name:
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Distance
                    </h6>
                    <h6 style={{ color: "white", fontSize: "12px" }}>
                      Liberation Date and Time:
                    </h6>
                  </div>
                </div> */}
              </div>
              <div>
              <h6
                  style={{
                    color: "white",
                    fontSize: "14px",
                    paddingTop: "8px",
                    fontWeight:"700"
                  }}
                >
                 MY LOFT RESULTS
                </h6>
                <h6  style={{ color: "white", fontSize: "12px", marginBottom:"0" }}>
                  Race: <br /> 
                  PATAYA ONE LOFT RACE
                </h6>
                <h6 style={{ color: "white", fontSize: "12px" }}>
                  Race Name: <br /> 
                  PATAYA ONE LOFT RACE
                </h6>
                
              </div>
            </div>
            <div >
              <img
                src={closeicon}
                className="ose"
                onClick={() => {
                  setCmShow5(false);
                }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ height: "450px", overflowY: "scroll" }}>
            <Table responsive>
              <tbody>
                {[11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n) => (
                  <tr>
                    <td style={{ fontSize: "12px" }}>
                      <div
                        style={{
                          width: "30px",
                          height: "30px",
                          background: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          border: "1px solid #000",
                          color: "red",
                          borderRadius: "4px",
                        }}
                      >
                        17
                      </div>
                    </td>
                    <td style={{ fontSize: "12px" }}>Decock hook</td>
                    <td style={{ fontSize: "14px" }}>
                      <img
                        style={{ width: "40px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_ceb66987863240d395b0511c7bad1420~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tbtrtt.png"
                        alt=""
                      />
                    </td>
                    <td style={{ fontSize: "12px" }}>1400ZA 2001</td>
                    <td style={{ fontSize: "12px" }}>
                      <img
                        style={{ width: "30px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_3c3c6f9e17f1491c96f4e38a5fe47c9c~mv2.png/v1/fill/w_68,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/yellow%20squares.png"
                        alt=""
                      />
                      <span style={{ color: "#0eaa3a" }}>1245</span>
                    </td>

                    <td style={{ fontSize: "12px", fontWeight: "600" }}>
                      {" "}
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#0eaa3a",
                        }}
                      ></div>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={mgshow}>
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title style={{ width: "100%" }}>
            <div style={{ display: "flex" }}>
              <img src={inslide} style={{ width: "60px", height: "60px" }} />
              <div style={{ marginLeft: "7px" }}>
                <img src={china} style={{ width: "30px" }} />
                <p className="patya">PATAYA ONE LOFT</p>
              </div>
              <div>
                <img
                  src={closeicon}
                  className="ose"
                  onClick={() => {
                    setMgShow(false);
                  }}
                />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "600px", backgroundColor: "#003a96" }}>
          <div id="mainstock">
            <div id="midl">
              <Container style={{ height: "auto", marginTop: "15px" }}>
                <Row>
                  <Col sm>
                    <div style={{ width: "100px" }}>
                      <p id="creditsavalble">COST IN CREDITS</p>
                      <div id="costs">
                        <p className="avalbltnumber">2350</p>
                      </div>
                    </div>
                  </Col>
                  <Col sm>
                    <p id="creditsavalble">CREDITS AVAILABLE</p>
                    <div className="Avalable">
                      <p className="avalbltnumber">1420</p>
                    </div>
                  </Col>
                  <Col sm>
                    <button
                      className="buyC"
                      onClick={() => {
                        setMgShow(false);
                        setDmShow(true);
                      }}
                    >
                      BUY CREDITS
                    </button>
                    <button
                      onClick={() => {
                        setMgShow(false);
                      }}
                      className="buyC"
                    >
                      YES STOCK MY LOFT
                    </button>
                  </Col>
                </Row>
              </Container>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div id="alllist"></div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal size="lg" show={smShow} animation={false}>
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "95%",
              }}
            >
              <div>
                <button id="selectPbutn">SELECT UP TO 10 PIGEONS</button>
              </div>
              <div style={{ display: "flex" }}>
                <img src={inslide} style={{ width: "60px", height: "60px" }} />
                <div style={{ marginLeft: "7px" }}>
                  <img src={china} style={{ width: "30px" }} />
                  <p className="patya">PATAYA ONE LOFT</p>
                </div>
                <div>
                  <img
                    src={closeicon}
                    className="ose"
                    onClick={() => {
                      setSmShow(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="listimain" style={{ overflow: "hidden" }}>
          <div id="mainselect">
            <div id="middl">
              <Container style={{ height: "auto" }}>
                <Row>
                  <Col sm>
                    <div style={{ width: "100px" }}>
                      <p id="creditsavalble">
                        CREDITS AVAIALABLE <br /> <br /> PIGEONS SELECTED
                      </p>
                    </div>
                  </Col>
                  <Col sm>
                    <div className="Avalable">
                      <p className="avalbltnumber">2354</p>
                    </div>
                    <div className="Avalable">
                      <p className="avalbltnumber">9</p>
                    </div>
                  </Col>
                  <Col sm>
                    <p id="cost">COST IN CREDITS</p>
                    <div id="costs">
                      <p className="avalbltnumber">2354</p>
                    </div>
                  </Col>
                  <Col sm>
                    <button
                      className="buyCbutn"
                      onClick={() => {
                        setSmShow(false);
                        setDmShow(true);
                      }}
                    >
                      BUY CREDITS
                    </button>

                    <button
                      className="buyCbutn"
                      onClick={() => {
                        setSmShow(false);
                        setMgShow(true);
                      }}
                    >
                      CONFIRM ENTRY
                    </button>
                    <Modal show={mgshow} onHide={() => setMgShow(false)}>
                      <Modal.Header
                        closeButton
                        style={{ backgroundColor: "#003a96" }}
                      >
                        <Modal.Title style={{ width: "100%" }}>
                          <div style={{ display: "flex" }}>
                            <img
                              src={inslide}
                              style={{ width: "60px", height: "60px" }}
                            />
                            <div style={{ marginLeft: "7px" }}>
                              <img src={china} style={{ width: "30px" }} />
                              <p className="patya">PATAYA ONE LOFT</p>
                            </div>
                          </div>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body
                        style={{
                          overflow: "hidden",
                          height: "600px",
                          backgroundColor: "#003a96",
                        }}
                      >
                        <div id="mainstock">
                          <div id="midl">
                            <Container
                              style={{
                                height: "auto",
                                marginTop: "15px",
                              }}
                            >
                              <Row>
                                <Col sm>
                                  <div style={{ width: "100px" }}>
                                    <p id="creditsavalble">COST IN CREDITS</p>
                                    <div id="costs">
                                      <p className="avalbltnumber">2354</p>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm>
                                  <p id="creditsavalble">CREDITS AVAILABLE</p>
                                  <div className="Avalable">
                                    <p className="avalbltnumber">1420</p>
                                  </div>
                                </Col>
                                <Col sm>
                                  <button className="buyC">BUY CREDITS</button>
                                  <button className="buyC">
                                    YES STOCK MY LOFT
                                  </button>
                                </Col>
                              </Row>
                            </Container>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div id="alllist"></div>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Col>
                </Row>
              </Container>
              <div
                className="tableHehigt"
                style={{ overflowY: "scroll", width: "100%" }}
              >
                <Table responsive>
                  <thead
                    style={{
                      background: "red",
                      color: "white",
                      borderBottom: "none",
                    }}
                  >
                    <tr>
                      {[
                        "#",
                        "A",
                        "Country",
                        "CI",
                        "Fancier",
                        "Ring Num",
                        "Pigeon Name",

                        "Credits",
                        "View",
                        "Select",
                      ].map((item, index) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n) => (
                      <tr>
                        <td style={{ fontSize: "12px" }}>1</td>
                        <td style={{ fontSize: "12px" }}>
                          <div
                            style={{
                              width: "5px",
                              height: "5px",
                              background: "red",
                              borderRadius: "50%",
                              marginTop: "10px",
                            }}
                          ></div>
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          <img
                            style={{ width: "18px", objectFit: "contain" }}
                            src="https://static.wixstatic.com/media/416fe9_cd825177b4d14a7a9ea5e7def3d05736~mv2.png/v1/fill/w_29,h_29,al_c,lg_1,q_85,enc_auto/BELGIUM.png"
                            alt=""
                          />
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          <img
                            style={{ width: "18px", objectFit: "contain" }}
                            src="https://static.wixstatic.com/media/416fe9_ceb66987863240d395b0511c7bad1420~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tbtrtt.png"
                            alt=""
                          />
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          alfons kalus and family
                        </td>
                        <td style={{ fontSize: "12px" }}>BN 22 3749837</td>
                        <td style={{ fontSize: "12px" }}>MR PERFECT</td>
                        <td style={{ fontSize: "12px" }}>123</td>
                        <td
                          onClick={() => {
                            setViewp(true);
                            setSmShow(false);
                          }}
                          style={{ fontSize: "12px" }}
                        >
                          View
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          <input type="checkbox" name="" id="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
            <div id="middl_mob">
              <Container style={{ height: "auto" }}>
                <div className="select_pegion">
                  <div >
                    <div style={{ width: "100px" }}>
                      <p id="creditsavalble">
                        CREDITS AVAIALABLE 
                      </p>
                      <div className="Avalable">
                      <p className="avalbltnumber">2354</p>
                    </div>
                    </div> 
                  </div>
                  <div >
                  <p id="creditsavalble">
                  PIGEONS SELECTED
                      </p>
                    <div className="Avalable">
                      <p className="avalbltnumber">9</p>
                    </div>
                  </div>
                  <div >
                    <p id="cost">COST IN CREDITS</p>
                    <div id="costs">
                      <p className="avalbltnumber">2354</p>
                    </div>
                  </div>
                  <div style={{display:"flex", flexDirection:"column"}}>
                    <button
                      className="buyCbutn"
                      onClick={() => {
                        setSmShow(false);
                        setDmShow(true);
                      }}
                    >
                      BUY CREDITS
                    </button>

                    <button
                      className="buyCbutn"
                      onClick={() => {
                        setSmShow(false);
                        setMgShow(true);
                      }}
                    >
                      CONFIRM ENTRY
                    </button>
                    <Modal show={mgshow} onHide={() => setMgShow(false)}>
                      <Modal.Header
                        closeButton
                        style={{ backgroundColor: "#003a96" }}
                      >
                        <Modal.Title style={{ width: "100%" }}>
                          <div style={{ display: "flex" }}>
                            <img
                              src={inslide}
                              style={{ width: "60px", height: "60px" }}
                            />
                            <div style={{ marginLeft: "7px" }}>
                              <img src={china} style={{ width: "30px" }} />
                              <p className="patya">PATAYA ONE LOFT</p>
                            </div>
                          </div>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body
                        style={{
                          overflow: "hidden",
                          height: "600px",
                          backgroundColor: "#003a96",
                        }}
                      >
                        <div id="mainstock">
                          <div id="midl">
                            <Container
                              style={{
                                height: "auto",
                                marginTop: "15px",
                              }}
                            >
                              <Row>
                                <Col sm>
                                  <div style={{ width: "100px" }}>
                                    <p id="creditsavalble">COST IN CREDITS</p>
                                    <div id="costs">
                                      <p className="avalbltnumber">2354</p>
                                    </div>
                                  </div>
                                </Col>
                                <Col sm>
                                  <p id="creditsavalble">CREDITS AVAILABLE</p>
                                  <div className="Avalable">
                                    <p className="avalbltnumber">1420</p>
                                  </div>
                                </Col>
                                <Col sm>
                                  <button className="buyC">BUY CREDITS</button>
                                  <button className="buyC">
                                    YES STOCK MY LOFT
                                  </button>
                                </Col>
                              </Row>
                            </Container>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div id="alllist"></div>
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </Container>
              <div
                className="tableHehigt"
                style={{ overflowY: "scroll", width: "100%" }}
              >
                <Table responsive>
                  <thead
                    style={{
                      background: "red",
                      color: "white",
                      borderBottom: "none",
                    }}
                  >
                    <tr>
                      {[
                        "#",
                        "A",
                        "Country",
                        "CI",
                        "Fancier",
                        "Ring Num",
                        "Pigeon Name",

                        "Credits",
                        "View",
                        "Select",
                      ].map((item, index) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((n) => (
                      <tr>
                        <td style={{ fontSize: "12px" }}>1</td>
                        <td style={{ fontSize: "12px" }}>
                          <div
                            style={{
                              width: "5px",
                              height: "5px",
                              background: "red",
                              borderRadius: "50%",
                              marginTop: "10px",
                            }}
                          ></div>
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          <img
                            style={{ width: "18px", objectFit: "contain" }}
                            src="https://static.wixstatic.com/media/416fe9_cd825177b4d14a7a9ea5e7def3d05736~mv2.png/v1/fill/w_29,h_29,al_c,lg_1,q_85,enc_auto/BELGIUM.png"
                            alt=""
                          />
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          <img
                            style={{ width: "18px", objectFit: "contain" }}
                            src="https://static.wixstatic.com/media/416fe9_ceb66987863240d395b0511c7bad1420~mv2.png/v1/fill/w_40,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/tbtrtt.png"
                            alt=""
                          />
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          alfons kalus and family
                        </td>
                        <td style={{ fontSize: "12px" }}>BN 22 3749837</td>
                        <td style={{ fontSize: "12px" }}>MR PERFECT</td>
                        <td style={{ fontSize: "12px" }}>123</td>
                        <td
                          onClick={() => {
                            setViewp(true);
                            setSmShow(false);
                          }}
                          style={{ fontSize: "12px" }}
                        >
                          View
                        </td>
                        <td style={{ fontSize: "12px" }}>
                          <input type="checkbox" name="" id="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={xmShow}
        // onHide={() => setXmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header style={{ backgroundColor: "#003a96" }}>
          <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
            <button className="enteracebtn">ENTER RACE</button>
            <img src={fantasy} style={{ width: "50px", marginLeft: "50px" }} />
            <div>
              <img
                src={closeicon}
                className="ose"
                onClick={() => {
                  setXmShow(false);
                }}
              />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mainbody">
          <div className="middlbody">
       { buy2 === false ?   
        <div className="lastbody" style={{ height: "385px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img src={inslide} style={{ width: "60px", height: "60px" }} />
                <div style={{ marginLeft: "7px" }}>
                  <img src={china} style={{ width: "30px" }} />
                  <p className="patya" style={{ color: "black" }}>
                    PATAYA ONE LOFT <br />
                    27 MAY 2023 06H00
                  </p>
                </div>
              </div>
              
              <div className="mainFee">
                <p className="Fee">
                  RACE ENTRY FEE &nbsp;{" "}
                  <span style={{ color: "red" }}>$ &nbsp; 30 </span>
                </p>
              </div>
              <img src={truck} style={{ width: "230px", marginLeft: "10px" }} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>
                  <br />
                  <span style={{ fontSize: "x-small" }}>
                    {" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; Balance
                  </span>
                  <br />
                  <span style={{ fontWeight: "900", fontSize: "large" }}>
                    $ 450.00 <br />
                  </span>
                </p>
                <br />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <button onClick={()=>setBuy2(true)} id="enterrc">ENTER RACE</button>
                <button
                  onClick={() => {
                    setXmShow(false);
                    setSmShow1(true);
                    setmodaltype1("wallet");
                  }}
                  id="enterrcGreen"
                >
                  TOP UP WALLET
                </button>
              </div>
            </div>
            :
            <div
                style={{
                  width: "100%",
                  background: "white",
                  padding: "15px",
                  borderRadius: "20px",
                  position: "relative",
                }}
              >
                <img
                  src={fantasy}
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "35%",
                    zIndex: "40",
                  }}
                  alt=""
                />
                <h1
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "#BADA55",
                    paddingTop: "30px ",
                    textAlign: "center",
                  }}
                >
                  PAYMENT SUCCESFULL
                </h1>
                <div
                  style={{
                    paddingTop: "20px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={happy} alt="" />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <buttton
                      className="startRbtn"
                      onClick={() =>  setXmShow(false)}
                    >
                      GO TO MY DASHBOARD
                    </buttton>
                  </div>
                </div>
              </div>}
          </div>
        </Modal.Body>
      </Modal>
      <div className=" grid_col">
        <button
          className="truckbutn"
          id="onebtn"
          onClick={() => setSmShow(true)}
        >
          Select your Pigeons
          <img src={pigeons} style={{ width: "20px" }} alt="" />
        </button>

        <button className="truckbutn" onClick={() => setXmShow(true)}>
          Enter Race <img src={basket} style={{ width: "20px" }} alt="" />
        </button>

        <button className="truckbutn" onClick={() => setCmShow(true)}>
          View All Races <img src={truck1} style={{ width: "40px" }} alt="" />
        </button>
        <button className="truckbutn" onClick={() => setCmShow2(true)}>
          Live Video <img src={camera} style={{ width: "30px" }} alt="" />
        </button>
        <button className="truckbutn" onClick={() => setCmShow3(true)}>
          Fancier Entries <img src={jerseys} style={{ width: "40px" }} alt="" />
        </button>
        <button className="truckbutn" onClick={() => setCmShow4(true)}>
          Race Results <img src={trophy} style={{ width: "20px" }} alt="" />
        </button>
        <button className="truckbutn" onClick={() => setCmShow5(true)}>
          Your Loft Results <img src={flags} style={{ width: "30px" }} alt="" />
        </button>
      </div>
      <div className=" grid_col_3">
        <button
          className="truckbutn"
          id="onebtn"
          onClick={() => setSmShow(true)}
        >
          Select your Pigeons
          
        </button>

        <button className="truckbutn" onClick={() => setXmShow(true)}>
          Enter Race 
        </button>

        <button className="truckbutn" onClick={() => setCmShow(true)}>
          View All Races 
        </button>
     
      </div>
      <div className="flex_col">
        <div id="truckdiv">
          <img src={truck} id="truckimg" />
        </div>

        <video className="mob_hidden" width="260" style={{ objectFit: "cover" }} controls>
          <source src={Video} />
        </video>

        <img className="mob_hidden" src={Vsectimg} id="Vsectimg" />
      </div>
      <div className="grid_col_2">
      <button className="truckbutn" onClick={() => setCmShow2(true)}>
          Live Video 
        </button>
        <button className="truckbutn" onClick={() => setCmShow3(true)}>
          Fancier Entries 
        </button>
        <button className="truckbutn" onClick={() => setCmShow4(true)}>
          Race Results 
        </button>
        <button className="truckbutn" onClick={() => setCmShow5(true)}>
          Your Loft Results 
        </button>
      </div>
    </div>
  );
}
export default Vsection;
