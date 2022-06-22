import React from "react";
import Navbar from "./../../Components/Navbar"
import Linebar from "./../../Components/Linebar/Linebar"
import Slider from "../../Components/slider/slider";
import img1 from "./../../Images/111 (2).jpg"
import img2 from "./../../Images/22222.jpg"
import img3 from "./../../Images/3333 (1).jpg"
import img4 from "./../../Images/4444.jpg"
import img5 from "./../../Images/55666.jpg"
import Smallslider from "./../../Components/SmallSlider/smallslider"
import Footer from "./../../Components/Footer/footer"
import Timer from './../../Components/Timer/timer'

import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
    return (
        <div id="Mainhome">

            <div>
                <Navbar />
            </div>
            <div>
                <Linebar />
            </div>
            <div>
                <Slider />
            </div>
            <div id="mrqueemain">
                <marquee direction="left" height="20" width="600px" bgcolor="#550d9c" style={{color:"white"}} id="marquee">Here is some scrolling text... right to left! this needs to be white text in helvitic</marquee>
            </div>

            <div>
                <Container fluid id='lineimageman'>
                    <Row>
                        <Col id="colmain">
                            <div><img className="lineimg" src={img1} /></div>
                            <div><img className="lineimg" src={img2} /></div>
                            <div><img className="lineimg" src={img3} /></div>
                            <div><img className="lineimg" src={img4} /></div>
                            <div><img className="lineimg" src={img5} /></div>


                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Timer />
            </div>




            <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"40px"}}><Smallslider /></div>
            <div id="smplline"></div>

            <div> <Footer /> </div>
        </div>
    )

}
export default Home