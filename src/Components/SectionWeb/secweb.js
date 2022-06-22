import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home from "./../../Images/MAIN LOFT.jpg"
import Wereweef from "./../../Images/WERFWEFEW.jpg"
import trophy from "./../../Images/TROPHY.jpg"
import Werewef from "./../../Images/T6JT6JT_JPG.jpj"
import "./secweb.css"
function SecWeb() {
    return (
        <Container>
            <Row>
                <Col sm>
                    <div id="mann">
                        <div id="topmainline">
                            <p id="toptextmain">
                                LOFT COMPETITORS  - ENTRIES</p>
                            <img src={home} id="hmeimg" />
                        </div>
                        <div >
                            <img src={Wereweef} />

                        </div>
                    </div>
                </Col>
                <Col sm>

                    <iframe src="https://www.oneloftrace.live/?page=0&loft_id=35&flight_id=1653309303&season_id=9" width="420" height="800px"></iframe>
                </Col>
                <Col sm>
                <div id="mannn">
                        <div id="topmainlin">
                            <p id="toptextmain">
                                LOFT COMPETITORS  - ENTRIES</p>
                            <img src={trophy}  />
                        </div>
                        <div >
                            <img src={Werewef} style={{width:'287px'}} />

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default SecWeb