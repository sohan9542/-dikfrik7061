import { React, useState } from "react"
import "./buttonline.css"
import { Container, Row, Col } from "react-bootstrap";
import lobby from "./../../Images/MAIN LOFT.jpg"
import loft from "./../../Images/eredre3.jpg"
import log from "./../../Images/fantasy league.jpg"
import Gold from "./../../Images/goldf.jpg"
import profileicon from "./../../Images/Profilemy.png"
import casier from "./../../Images/cashier.png"
import statistics from "./../../Images/statistics.png"
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png"

import { NavDropdown, Nav, Form, FormControl, onHide, flase, Button, Navbar, Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
function ButtonLine() {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    return (
        <Container id="buttonlin">
            <Row style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Col sm>
                    <button className="buttons" id="loby">MY LOBBY <img src={lobby} style={{ width: "40px" }} /></button>
                </Col>
                <Col sm>
                    <button className="buttons" onClick={() => setSmShow(true)}>MY PROFILE <img src={profileicon} className="cashiericon" /></button>


                    <Modal
                        // onHide={() => setSmShow(false)}
                        //  onClick={() => setSmShow(false)}

                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={smShow}
                    // style={{width:"1000px"}}
                    >
                        <Modal.Header style={{ backgroundColor: "#003a96", height: "70px" }}>
                            <Modal.Title id="contained-modal-title-vcenter"style={{display:"flex", justifyContent:"space-between", width:"100%"}} >
                                <p id="presonalM">PERSONAL DETAILS</p>
                                <img src={closeicon} className="Cose" onClick={() => { setSmShow(false) }}  />

                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ height: "auto", backgroundColor: "#003a96", display: "flex", justifyContent: "center" }}>
                            <Container id="detailmain">
                                <img src={log} id="log" />
                                <Row>

                                    <Col sm className="formcol">
                                        <span className="inpttitle">Enter your Name*</span>
                                        <input type="text" placeholder="Enter your Name" className="inptsignup" /><br />
                                        <span className="inpttitle">Email Address*</span>
                                        <input type="email" placeholder="Enter Address" className="inptsignup" /><br />
                                        <span className="inpttitle">Date of Birth*</span>
                                        <input type="date" placeholder="Enter Password" className="inptsignup" /><br />

                                        <span className="inpttitle">Select your Country*</span>
                                        <select className="inptsignup">
                                            <option value="grapefruit">Afghanistan</option>
                                            <option value="lime">Albania</option>
                                            <option selected value="coconut">Algeria</option>
                                            <option value="mango">Andorra</option>
                                        </select><br />
                                        <span className="inpttitle">Select Your Outfit*</span>
                                        <select className="inptsignup">
                                            <option value="grapefruit">Yellow</option>
                                            <option value="lime">Blue</option>
                                            <option selected value="coconut">white</option>
                                            <option value="mango">etc</option>
                                        </select>
                                    </Col>
                                    <br />
                                    <br />
                                    <Col sm className="formcol">
                                        <span className="inpttitle">Enter Your Surname*</span>
                                        <input type="text" placeholder="Enter your Name" className="inptsignup" /><br />
                                        <span className="inpttitle">Email Address*</span>
                                        <input type="email" placeholder="Enter Address" className="inptsignup" /><br />
                                        <span className="inpttitle">Enter a Loft Name*</span>
                                        <input type="text" placeholder="Enter Password" className="inptsignup" /><br />
                                        <span className="inpttitle">Mobile Number*</span>
                                        <input type="number" placeholder="Enter your Name" className="inptsignup" /><br />
                                        <span className="inpttitle">Email Address*</span>
                                        <input type="file" placeholder="Enter Address" className="inptsignup" /><br />

                                    </Col>
                                </Row>
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                    <p id="lastupdettex">
                                        Please read our Terms of Use and Privacy Policies <br />
                                        <button id="updatebutn">UPDATE PROFILE</button>
                                    </p>

                                </div>
                            </Container>

                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button onClick={() => setSmShow(false)}>Close</Button>
                        </Modal.Footer> */}
                    </Modal>
                </Col>

                <Col sm>
                    <button className="buttons" onClick={() => setLgShow(true)}>CASHIER <img src={casier} className="cashiericon" /></button>


                    <Modal
                        // onHide={() => setLgShow(false)}
                        //  onClick={() => setSmShow(false)}

                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={lgShow}
                    >
                        <Modal.Header id="CashierH">
                            <Modal.Title id="contained-modal-title-vcenter" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "95%" }}>
                                    <button id="cashierbutn">CASHIER TRANSACTIONS</button>
                                    <img src={Gold} />
                                </div>
                                <img src={closeicon} className="Cose" onClick={() => { setLgShow(false) }}  />

                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundColor: "#003a96", display: "flex", justifyContent: "center" }}>
                            <div id="mainCashier">
                                <div id="middleCashier">

                                </div>
                            </div>
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <Button onClick={() => setSmShow(false)}>Close</Button>
                        </Modal.Footer> */}
                    </Modal>
                </Col>
                <Col sm>
                    <Link to="/"> <button className="buttons">HOW TO <img src={loft} style={{ width: "30px" }} /></button></Link>
                </Col>
                <Col sm>
                    <button className="buttons">MY STATISTICS <img src={statistics} style={{ width: "24px", marginLeft: "3px" }} /></button>
                </Col>
            </Row>
        </Container>
    )
}
export default ButtonLine