import React from "react";
import Navbar from "./../../Components/Navbar/index"
import Linbar from "./../../Components/Linebar/Linebar"
import mainimg from "./../../Images/slide2.jpg"
import Footer from "../../Components/Footer/footer";
import fcbookicon from "./../../Images/facbok.jpg"
import Twitter from "./../../Images/twitter.jpg";
import Linkicon from "./../../Images/linkdin.jpg"
import Instagram from "./../../Images/instagm.jpg";
import './contact.css'

import { Container, Row, Col } from "react-bootstrap";
function Contact() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Linbar />
            </div>
            <div>
                <img src={mainimg} id="contactimg" />
            </div>
            <Container fluid >
                <Row>
                    {/* <Col></Col> */}
                    <Col xs={8} className="mndiv">
                        <Container fluid style={{ display: "flex" }} id="maincolm">
                            <Col sm className="colm" id="col1">
                                <h1 id="sayhello">
                                    Say Hello</h1>
                                <p id="col2text">
                                    This is your Contact section paragraph. Encourage <br />your reader to reach out with any questions <br /> or comments.
                                </p>
                                <div id="txmn">
                                    <p>
                                        Phone <br />
                                        123-456-7890
                                    </p>
                                    <p>
                                        Email <br />
                                        info@mysite.com
                                    </p>
                                </div>
                                <span className="apps">Social Media</span><br />
                                <div className="apps">
                                    <img src={fcbookicon} />
                                    <img src={Twitter} />
                                    <img src={Linkicon} />
                                    <img src={Instagram} />
                                </div>
                            </Col>
                            <Col sm className="colm" id="col2">
                                <div style={{ width: "310px", marginLeft: "50px" }}>

                                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "-65px" }}>

                                        <div>
                                            <p className="topname">First Name</p>
                                            <input type="text" className="inputtop topp" />
                                        </div>
                                        <div>
                                            <p className="topname">Last Name</p>
                                            <input type="text" className="inputtop topp" id="lastnam"/>
                                        </div>

                                    </div>

                                </div>
                                <div style={{ width: "320px", marginLeft: "50px", marginTop: "60px" }}>
                                    <div>
                                        <p className="topname" id="eml">Email *</p>
                                        <input type="text" className="inputtop" />
                                    </div>
                                    <div>
                                        <p className="topname">Message</p>
                                        <textarea type="text" id="inputbottom" style={{ border: "solid 1px black" }} />
                                    </div>
                                    <button id="contactsend">Send</button>
                                </div>

                            </Col>

                        </Container>
                        <div id="borderline"></div>
                        <div id="lastvist">
                            <h3 id="vist">Visit Us</h3>
                            <p className="visttext">
                                This is your Contact section paragraph. Encourage your reader to reach out with any questions,<br /> comments or to take a different action specific to your site. You can also click on the contact form <br /> to customize the fields.
                            </p>
                            <br />

                            <p className="visttext">
                                Address <br />
                                500 Terry Francois Street San Francisco, CA 94158
                            </p>
                            <p className="visttext">
                                Opening Hours<br />
                                <br />

                                Mon - Fri &nbsp; &nbsp; &nbsp; 8:00 am – 8:00 pm<br />
                                <br />

                                Saturday &nbsp; &nbsp; &nbsp; 9:00 am – 7:00 pm<br />
                                <br />

                                Sunday &nbsp; &nbsp; &nbsp; &nbsp; 9:00 am – 9:00 pm
                            </p>

                            <iframe src="https://goo.gl/maps/QfP2d42Sx8n2PGxR8" title="W3Schools Free Online Web Tutorials"></iframe>
                        </div>

                        {/* <Col ></Col> */}


                    </Col>
                </Row>

            </Container>
            <div>
                <Footer />
            </div>

        </div >
    )
}
export default Contact