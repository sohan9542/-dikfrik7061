import { React, useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import { NavDropdown, Nav, Form, FormControl, onHide, Button, flase, Navbar, Modal } from "react-bootstrap"
import "./Vsection.css"
import truck from "./../../Images/truck open (1).png"
import Vsectimg from "./../../Images/12.png"
import line1img from "./../../Images/sgfsdgdsfgbsrtv.png"
import trophy from "./../../Images/TROPHY.jpg"
import Gold from "./../../Images/goldf.jpg"
import Video from "./../../Images/VID-20220528-WA0009.mp4"
import inslide from "./../../Images/inslide.jpg"
import china from "./../../Images/china.jpg"
import fantasy from "./../../Images/fantasy league.jpg"
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png"


function Vsection() {
    const [smShow, setSmShow] = useState(false);
    const [mgshow, setMgShow] = useState(false);
    const [xmShow, setXmShow] = useState(false);
    const [dmShow, setDmShow] = useState(false);
    const [cmShow, setCmShow] = useState(false);

    return (
        <Container id="videosectionmain">
            <Row>
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
                            <div><img src={closeicon} className="ose" onClick={() => { setDmShow(false) }} /></div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="mainbody">
                        <div className="middlbody">
                            <div className="lastbody">
                                <div className="mainFee">
                                    <p className="Fee">GET CREDITS </p>

                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <p>

                                        <span style={{ fontSize: "x-small" }}> &nbsp; &nbsp; &nbsp; &nbsp; Balance</span><br />
                                        <span style={{ fontWeight: "900", fontSize: "large" }}>$    450.00 <br /></span>
                                    </p>
                                    <br />
                                </div>
                                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                    <p id="CreditR">Select Credits Required
                                        <select id="inputgnup">
                                            <option value="grapefruit">Get 1000 credist for $ 10 dollor</option>
                                            <option value="lime">Get 1000 credist for $ 10 dollor</option>
                                            <option selected value="coconut">Get 1000 credist for $ 10 dollor</option>
                                            <option value="mango">Get 1000 credist for $ 10 dollor</option>
                                        </select>
                                    </p>
                                </div>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <button id="enterrc">BUY CREDITS</button>
                                </div>
                            </div>
                        </div>

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
                            <div><img src={closeicon} className="ose" onClick={() => { setCmShow(false) }} /></div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="mainbody">
                        <div className="middbody">

                            <div className="lastbodycard">
                                <div style={{ marginLeft: "7px", display: "flex", paddingTop: "10px" }}>
                                    <img src={china} style={{ width: "30px", height: "30px" }} />
                                    <p className="patya" style={{ color: "black", marginLeft: "5px" }}>PATAYA ONE LOFT <br />
                                        27 MAY 2023    06H00</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={inslide} className="imgsiz" />
                                    <p className="recivetext">
                                        LOFT PEARCH FEE <br />
                                        <span className="redcolr"> $    30 </span><br />
                                        # OF PIGEONS ENTERED<br />
                                        <span className="redcolr">3000 </span><br />
                                        FREE CREDITS RECEIVE<br />
                                        <span className="redcolr"> 6578</span>
                                    </p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                    <button className="loftbtn">ENETR LOFT FOR THIS RACE</button>
                                </div>
                            </div>

                            <div className="lastbodycard">
                                <div style={{ marginLeft: "7px", display: "flex", paddingTop: "10px" }}>
                                    <img src={china} style={{ width: "30px", height: "30px" }} />
                                    <p className="patya" style={{ color: "black", marginLeft: "5px" }}>PATAYA ONE LOFT <br />
                                        27 MAY 2023    06H00</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={inslide} className="imgsiz" />
                                    <p className="recivetext">
                                        LOFT PEARCH FEE <br />
                                        <span className="redcolr"> $    30 </span><br />
                                        # OF PIGEONS ENTERED<br />
                                        <span className="redcolr">3000 </span><br />
                                        FREE CREDITS RECEIVE<br />
                                        <span className="redcolr"> 6578</span>
                                    </p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                    <button className="loftbtn">ENETR LOFT FOR THIS RACE</button>
                                </div>
                            </div>

                            <div className="lastbodycard">
                                <div style={{ marginLeft: "7px", display: "flex", paddingTop: "10px" }}>
                                    <img src={china} style={{ width: "30px", height: "30px" }} />
                                    <p className="patya" style={{ color: "black", marginLeft: "5px" }}>PATAYA ONE LOFT <br />
                                        27 MAY 2023    06H00</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={inslide} className="imgsiz" />
                                    <p className="recivetext">
                                        LOFT PEARCH FEE <br />
                                        <span className="redcolr"> $    30 </span><br />
                                        # OF PIGEONS ENTERED<br />
                                        <span className="redcolr">3000 </span><br />
                                        FREE CREDITS RECEIVE<br />
                                        <span className="redcolr"> 6578</span>
                                    </p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                    <button className="loftbtn">ENETR LOFT FOR THIS RACE</button>
                                </div>
                            </div>

                        </div>

                    </Modal.Body>
                </Modal>


                <Modal show={mgshow}  >
                    <Modal.Header style={{ backgroundColor: "#003a96" }}>
                        <Modal.Title style={{ width: "100%" }}>
                            <div style={{ display: "flex" }}>
                                <img src={inslide} style={{ width: "60px", height: "60px" }} />
                                <div style={{ marginLeft: "7px" }}>
                                    <img src={china} style={{ width: "30px" }} />
                                    <p className="patya">PATAYA ONE LOFT</p>
                                </div>
                                <div><img src={closeicon} className="ose" onClick={() => { setMgShow(false) }} /></div>
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
                                                <p id="creditsavalble">
                                                    COST IN CREDITS

                                                </p>
                                                <div id="costs">
                                                    <p className="avalbltnumber">2354</p>

                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm>
                                            <p id="creditsavalble">
                                                CREDITS AVAILABLE
                                            </p>
                                            <div className="Avalable">
                                                <p className="avalbltnumber">1420</p>
                                            </div>
                                        </Col>
                                        <Col sm>
                                            <button className="buyC">BUY CREDITS</button>
                                            <button className="buyC">YES STOCK MY LOFT</button>
                                        </Col>
                                    </Row>
                                </Container>
                                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <div id="alllist">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>

                </Modal>
                <Col sm>
                    <div id="truckdiv">
                        <div>
                            <Container>
                                <Row>
                                    <Col sm>
                                        <button className="truckbutn" id="onebtn" onClick={() => setSmShow(true)}>Select your Pigeons</button>

                                    </Col>
                                    <Col sm>
                                        <button className="truckbutn" onClick={() => setXmShow(true)} >Enter Race</button>

                                    </Col>
                                    <Col sm>
                                        <button className="truckbutn" onClick={() => setCmShow(true)}
                                        
                                        
                                        >View All Races</button>

                                    </Col>
                                </Row>
                            </Container>

                            <Modal show={smShow} animation={false}>
                                <Modal.Header style={{ backgroundColor: "#003a96" }}>
                                    <Modal.Title style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", width: "95%" }}>
                                            <div>
                                                <button id="selectPbutn">SELECT UP TO 10 PIGEONS</button>
                                            </div>
                                            <div style={{ display: "flex" }}>
                                                <img src={inslide} style={{ width: "60px", height: "60px" }} />
                                                <div style={{ marginLeft: "7px" }}>
                                                    <img src={china} style={{ width: "30px" }} />
                                                    <p className="patya">PATAYA ONE LOFT</p>
                                                </div>
                                                <div><img src={closeicon} className="ose" onClick={() => { setSmShow(false) }} /></div>
                                            </div>
                                        </div>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body id="listimain">
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
                                                        <p id="cost">
                                                            COST IN CREDITS
                                                        </p>
                                                        <div id="costs">
                                                            <p className="avalbltnumber">2354</p>

                                                        </div>
                                                    </Col>
                                                    <Col sm>
                                                        <button className="buyCbutn" onClick={() => { setSmShow(false); setDmShow(true) }}>BUY CREDITS</button>



                                                        <button className="buyCbutn" onClick={() => { setSmShow(false); setMgShow(true) }} >CONFIRM ENTRY</button>
                                                        <Modal show={mgshow} onHide={() => setMgShow(false)} >
                                                            <Modal.Header closeButton style={{ backgroundColor: "#003a96" }}>
                                                                <Modal.Title style={{ width: "100%" }}>
                                                                    <div style={{ display: "flex" }}>
                                                                        <img src={inslide} style={{ width: "60px", height: "60px" }} />
                                                                        <div style={{ marginLeft: "7px" }}>
                                                                            <img src={china} style={{ width: "30px" }} />
                                                                            <p className="patya">PATAYA ONE LOFT</p>
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
                                                                                        <p id="creditsavalble">
                                                                                            COST IN CREDITS

                                                                                        </p>
                                                                                        <div id="costs">
                                                                                            <p className="avalbltnumber">2354</p>

                                                                                        </div>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col sm>
                                                                                    <p id="creditsavalble">
                                                                                        CREDITS AVAILABLE


                                                                                    </p>
                                                                                    <div className="Avalable">
                                                                                        <p className="avalbltnumber">1420</p>
                                                                                    </div>
                                                                                </Col>
                                                                                <Col sm>
                                                                                    <button className="buyC">BUY CREDITS</button>
                                                                                    <button className="buyC">YES STOCK MY LOFT</button>
                                                                                </Col>
                                                                            </Row>
                                                                        </Container>
                                                                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                                                            <div id="alllist">

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Modal.Body>

                                                        </Modal>

                                                    </Col>
                                                </Row>
                                            </Container>
                                            <Form className="d-flex" style={{ width: "95%", marginLeft: "10px" }}>
                                                <FormControl
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button className="searchbutn">Search</Button>
                                            </Form>
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
                                        <div><img src={closeicon} className="ose" onClick={() => { setXmShow(false) }} /></div>

                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="mainbody">
                                    <div className="middlbody">
                                        <div className="lastbody">
                                            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                                                <img src={inslide} style={{ width: "60px", height: "60px" }} />
                                                <div style={{ marginLeft: "7px" }}>
                                                    <img src={china} style={{ width: "30px" }} />
                                                    <p className="patya" style={{ color: "black" }}>PATAYA ONE LOFT <br />
                                                        27 MAY 2023    06H00
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="mainFee">
                                                <p className="Fee">RACE ENTRY FEE &nbsp; <span style={{ color: "red" }}>$ &nbsp; 30 </span></p>
                                            </div>
                                            <img src={truck} style={{ width: "230px", marginLeft: "10px" }} />
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <p>
                                                    <br />
                                                    <span style={{ fontSize: "x-small" }}> &nbsp; &nbsp; &nbsp; &nbsp; Balance</span><br />
                                                    <span style={{ fontWeight: "900", fontSize: "large" }}>$    450.00 <br /></span>
                                                </p>
                                                <br />
                                            </div>
                                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                                <button id="enterrc">ENTER RACE</button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>

                        </div>
                        <img src={truck} id="truckimg" />
                    </div>

                </Col>
                <Col sm>
                    <div id="videomain">
                        <video width="260" height="250" id="video" controls >
                            <source src={Video} />
                        </video>
                    </div>
                </Col>
                <Col sm>
                    <div>
                        <img src={Vsectimg} id="Vsectimg" />
                        <p id="alltext">
                            <img src={line1img} /> &nbsp; Fanciers Entered &nbsp; &nbsp;
                            123 <br /> <br />
                            <img src={trophy} /> &nbsp; &nbsp; 3 &nbsp; POSITIONS <br />
                            <br />
                            <img src={Gold} /> &nbsp; &nbsp; $  &nbsp; 1000
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Vsection