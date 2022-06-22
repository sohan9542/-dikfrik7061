import React, {useState} from "react";

import profle from "./../../Images/PROFILEPIC.jpg"
import homicon from "./../../Images/MAIN LOFT.jpg"
import bird from "./../../Images/evesbvseves (1).jpg"
import manimg from "./../../Images/yellow squares.jpg"
import belgium from "./../../Images/BELGIUM.jpg"
import Gold from "./../../Images/goldf.jpg"
// import FlipCountdown from '@rumess/react-flip-countdown';
import Trophy from "./../../Images/TROPHY.jpg"
// import Gold from "./../../Images/goldf.jpg"
import { Container, Row, Col, Modal } from "react-bootstrap";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png"
import priceimg from "./../../Images/FTRTFB T.jpg"
import lastimg from "./../../Images/RGRDGBHREGVRE.jpg"
import card from "./../../Images/CRDBHRHB.jpg"

import "./sectiontwo.css"
function Section2() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [modaltype, setmodaltype] = useState("wallet")
    return (
        <Container id="sectionman">
            <Row>
                <h4 id="sectionhead"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Pataya One Loft Race</h4>
                <Col sm>
                    <div id="racemain">
                        <span className="rac">RACE #</span>
                        <div id="boxx">
                            <span id="boxxtx">17</span>

                        </div>
                    </div>
                </Col>

                <Col sm >
                    <div>
                        <p className="texx">
                            Race Name:
                            Distance
                            Liberation Date and Time:

                        </p>
                    </div>
                </Col>
                <Col sm>
                    <p className="texx" id="texxt">
                        TRAINING RACE HILITO <br />
                        450 <br />
                        Saturday, May 21, 2022, 6:00:00 AM GMT+2

                    </p>
                </Col>
                <Col sm >
                    <div style={{marginTop:"-20px"}}>
                        <div className="maintgold">
                            <img src={Trophy} className="tgold" />
                            <div style={{display:"flex", flexDirection:"column"}}>
                            <span className="iconwith"> POSITION</span> 
                            <span className="grennum">2</span>
                            </div>

                        </div>
                        <div className="maintgold">
                            <img src={Gold} className="tgold" />
                            <div>
                            <span className="iconwith"> WININGS</span><br/>
                            <span className="grennum">$  356
                            </span>
                            </div>
                        </div>

                    </div>

                </Col>
                <Col sm>
                    <img src={bird} className="margin" />
                </Col>
                <Col sm id="mannmain" className="margin">
                    <img src={belgium} id="belgum" />
                    <img src={manimg} id="mannimg" />
                    <p id="manntext">Juan s loft name
                    </p>
                </Col>
                <Col sm style={{ marginTop: "-25px" }} className="margin">
                    <div style={{ display: "flex", JustifyContent: "center", flexDirection: "column" }}>
                        <p id="balnce">Balance</p>
                        <div id="pric2main">
                            <img src={Gold} />
                            <span id="pric2">  $ &nbsp; 450.00 </span>
                        </div>
                        <div>
                            <button className="ratd" onClick={() => { setSmShow(true); setmodaltype("wallet") }}>TOP OP WALLET</button>
                            <button className="ratd" onClick={() => { setSmShow(true); setmodaltype("Withdraw") }}>WITHDRAW</button>


                            <Modal
                                size="sm"
                                show={smShow}
                                // onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"


                            >

                                <Modal.Header  className="manButn">
                                <img src={closeicon} className="cse" onClick={() => { setSmShow(false)}}/>
                                    <div>
                                        <img src={Gold} id="goldenicon" />
                                        <button id="funfM">FUNDING MANAGEMENT</button>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <div><button className="LognSignUp" onClick={() => setmodaltype("Withdraw")}

                                            style={{ backgroundColor: modaltype === "Withdraw" ? "#550d9c" : "white" }}
                                        >DEPOSIT</button></div>
                                        <div><button className="LognSignUp" style={{ backgroundColor: modaltype === "wallet" ? "#550d9c" : "white" }} onClick={() => setmodaltype("wallet")}>WITHDRAW </button>
                                      </div>

                                    </div>
                                </Modal.Header>
                                <Modal.Body style={{ backgroundColor: "#003a96", marginTop: "-10px" }} >




                                    {modaltype === "wallet" ? <div>

                                        <div id="depostm">
                                            <p id="amountT" >SELECT YOUR AMOUNT</p>
                                            <Container style={{ width: "100%", display: "flex" }}>
                                                <Row>
                                                    <Col sm><button className="amountb">30</button></Col>
                                                    <Col sm><button className="amountb">50</button></Col>
                                                    <Col sm><button className="amountb">100</button></Col>
                                                    <Col sm><button className="amountb">250</button></Col>
                                                    <Col sm><button className="amountb">500</button></Col>
                                                </Row>
                                            </Container>
                                            <div id="maincard">
                                                <img src={card} className="cardimg" />

                                                <img src={priceimg} className="cardimg" />
                                            </div>
                                            <div id="lastmn">
                                                <button id="makeD">MAKE A DEPOSIT</button><br />
                                                <p id="paypaltext">PAY USING PAYPAL</p>
                                                <img src={lastimg} id="lastimg" />
                                            </div>
                                        </div>

                                    </div> :

                                        <div id="withdrawM">
                                            <p id="Awithdraw">ENTER YOUR AMOUNT YOU WISH TO WITHDRAW
                                                <br /> <br /> <span style={{ fontWeight: "bold", marginLeft: "80px" }}> Balance</span><br />
                                                &nbsp; &nbsp; &nbsp; &nbsp; <img src={Gold} /> &nbsp; &nbsp; &nbsp; <span style={{ fontSize: "20px", fontWeight: "900" }}>$ &nbsp;   450.00</span><br />
                                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Enter Withdrawn amount <br />
                                                <input type="text" placeholder="Enter Amount" className="inputwithdraw" /><br /> <br />
                                                <button className="lasywithdraw">WITHDRAW</button>
                                                <br />
                                                <br />
                                            </p>

                                        </div>
                                    }


                                </Modal.Body>

                            </Modal>
                        </div>
                    </div>
                </Col>


            </Row>
        </Container>

    )
}
export default Section2