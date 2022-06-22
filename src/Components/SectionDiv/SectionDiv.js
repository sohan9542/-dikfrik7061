import React from "react"
import "./SectionDiv.css"
import { Container, Row, Col } from "react-bootstrap";
import Golden from "./../../Images/goldf.jpg"
import home from "./../../Images/MAIN LOFT.jpg"
import flags from "./../../Images/eredre3.jpg"
import Trophy from "./../../Images/TROPHY.jpg"
import boxicon from "./../../Images/china.jpg"
import boximg1 from "./../../Images/inslide.jpg"
import closed from "./../../Images/CLOSED.jpg"
import boximg2 from "./../../Images/inslide2.jpg"
import { Link } from 'react-router-dom';
function SectionDiv() {
    return (
        <Container id="maindivsection">
            <Row>
                <Col sm >
                    <div id="divcol1">
                        <div className="haffdiv" id="hafdiiv">
                            <h6 id="haffdivtxt">UPCOMING ONE LOFT RACES</h6></div>
                        <div id="mainmain">
                            <div className="dives">
                                <img src={home} id="homee" />
                                <img src={flags} id="flags" />
                                <img src={Golden} id="golden" />
                                <img src={Trophy} id="tophy" />
                            </div>

                            <div className="dives">
                                <div className="divbox"><p className="numberbold">10</p></div>
                                <div className="divbox"><p className="numberbold">22</p></div>
                                <div className="divbox" ><p className="numberbold"> $    1254</p></div>
                                <div className="divbox"><p className="numberbold">5</p></div>
                            </div>

                            <div className="dives">
                            </div>
                        </div>..

                    </div>
                </Col>

                <Col sm >
                    <div id="divcol2">
                        <div className="haffdiv">
                            <h6 id="haffdivtxt">MY RACES ENTERED</h6>
                        </div>
                        <div id="mainlne">
                            <div className="linesss">
                                <img src={flags} className="flg" />
                                <img src={boxicon} />
                                <img src={boximg1} className="cricleimg" />
                                <p className="lineestx">
                                    Pattaya One Loft 	&nbsp; &nbsp; &nbsp; RACE # 5</p>
                                <img src={closed} className="closedicon" />
                          <Link to="/Race"><button className="postebutn">GO TO RACE</button></Link>
                            </div>

                            <div className="linesss">
                                <img src={flags} className="flg" />
                                <img src={boxicon} />
                                <img src={boximg2} className="cricleimg" />
                                <p className="lineestx">
                                    Pattaya One Loft 	&nbsp; &nbsp; &nbsp; RACE # 5</p>
                                <img src={closed} className="closedicon" />
                                <Link to="/Race"><button className="postebutn">GO TO RACE</button></Link>
                            </div>

                            <div className="linesss">
                                <img src={flags} className="flg" />
                                <img src={boxicon} />
                                <img src={boximg1} className="cricleimg" />
                                <p className="lineestx">
                                    Pattaya One Loft 	&nbsp; &nbsp; &nbsp; RACE # 5</p>
                                <img src={closed} className="closedicon" />
                                <Link to="/Race"><button className="postebutn">GO TO RACE</button></Link>
                            </div>

                            <div className="linesss">
                                <img src={flags} className="flg" />
                                <img src={boxicon} />
                                <img src={boximg1} className="cricleimg" />
                                <p className="lineestx">
                                    Pattaya One Loft 	&nbsp; &nbsp; &nbsp; RACE # 5</p>
                                <img src={closed} className="closedicon" />
                                <Link to="/Race"><button className="postebutn">GO TO RACE</button></Link>
                            </div>

                            <div className="linesss">
                                <img src={flags} className="flg" />
                                <img src={boxicon} />
                                <img src={boximg1} className="cricleimg" />
                                <p className="lineestx">
                                    Pattaya One Loft 	&nbsp; &nbsp; &nbsp; RACE # 5</p>
                                <img src={closed} className="closedicon" />
                                <Link to="/Race"><button className="postebutn">GO TO RACE</button></Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
export default SectionDiv