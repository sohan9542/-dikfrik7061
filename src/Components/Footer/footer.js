import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './footer.css'
import fullogo from "./../../Images/greyfgfgf.jpg"
import logoo from "./../../Images/logo.jpg"
import services from "./../../Images/vrdrvrd.jpg"
import { useNavigate } from "react-router-dom";
function Footer() {
    const navigate = useNavigate()
    return (
        <div>
            <Container fluid id="Footermain">
                <Row>

                    <Col className="mandv">
                        <Row>
                            <Col sm className="pags"><img src={fullogo} />
                                <img src={logoo} />
                            </Col>
                            <Col sm className="pags"><img src={services} />
                                <button className="servicespage">About Us</button>
                                <p className="fotertx"><span onClick={()=>navigate("/privacy-policy")} style={{cursor:"pointer"}}>Privacy Policy</span><br />
                                <span onClick={()=>navigate("/terms-and-conditions")} style={{cursor:"pointer"}}>Terms and Conditions</span>
                                    </p>
                            </Col>
                            <Col sm className="pags"><img src={services} />
                                <button className="servicespage">Our Product</button>
                                <p className="fotertx">One Loft Pigeon Racing Fantasy League</p>
                            </Col>
                            <Col sm className="pags"><img src={services} />
                                <button className="servicespage">Services</button>
                                <p className="fotertx">Daily Fantasy League</p>
                            </Col>
                            <Col sm className="pags"><img src={services} />
                                <button className="servicespage">Help Centre</button>
                                <p className="fotertx">
                                    FAQ<br />
                                    How To Deposit
                                </p></Col>

                        </Row>
                        <div id="simpleborder"></div>
                        <div id="footerlast">
                            <Col sm id="lstpage1"><img src={services} />
                                <button className="servicespage">Our Partners</button>
                            </Col>
                            <Col sm><img src={services} />
                                <button className="servicespage" >Payment Method</button>
                            </Col>

                        </div>
                        <div id="lasttextmain">
                        <p id="lasttext">2022 Compupigeon.com Allrights Resvered. Licence: 123133. Address:19 Ribbok  Street, Durbanville, South Africa</p>
                        </div>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}
export default Footer