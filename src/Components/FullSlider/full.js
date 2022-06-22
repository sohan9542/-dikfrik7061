import { Component } from "react";
import { React, useState } from "react"
import { NavDropdown, Nav, Form, FormControl, onHide, Button, Navbar, Modal, Container, Row, Col } from "react-bootstrap"
// import faker from 'faker';
// import Cricle from "./../../Components/Circle"
import Slider from "react-slick";
// import "./Largeslider.css"
import "./full.css"
import home from "./../../Images/MAIN LOFT.jpg"
import Bird from "./../../Images/tbtrtt.jpg"
import timer from "./../../Images/45F6G5.jpg"
import BarChart from "react-svg-bar-chart";
import Pigeon from "./../../Images/pigeon.png"
import LAW from "./../../Images/LAW.png"
import Canada from "./../../Images/canada.jpg"
import redblue from "./../../Images/BELGIUM.jpg"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png"

import { width } from "@mui/system";
const data = [];

for (let x = 1; x <= 10; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * 100) });
}
export default class Responsive extends Component {
    constructor() {
        super()
        this.state = {
            width: 500,
            show: false,
            set: false
        }
    }
    componentDidMount = () => {
        window.onresize = () => {
            this.setState({ width: this.refs.root.offsetWidth });
        };
    }
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1420,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 994,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        // const [sgShow, setSgShow] = useState(false);



        return (
            <Container id="mainfull">

                <div id="mainfuldivm">
                    <div id="haffuldiv">
                        <Container>
                            <Row>
                                <Col sm>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <img src={home} />
                                        <h6 id="hafuldivtxt">MY LOFT FOR THIS RACE</h6>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <img src={Bird} />
                                        <h6 id="hafuldivtxt"><span className="color">9</span> PIGEON/S IN BASKET</h6>
                                    </div></Col>
                                <Col sm>
                                    <div style={{ display: "flex", flexDirection: "row" }}>

                                        <h6 id="hafuldivtxt"><span className="color">1</span> PIGEONS TO ADD</h6>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <img src={timer} />
                                        <h6 id="hafuldivtxt"><span className="color">1250</span> CREDITs LEFT</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Container>





                    </div>
                    <div id="mainsld">
                        <Modal show={this.state.show} >
                            <Modal.Header style={{ backgroundColor: "#003a96" }}>
                                <Modal.Title style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                    <div><img src={closeicon} style={{ width: "30px", height: "27", left: "20" }} onClick={() => this.setState({ show: false })} /></div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="graphmain">
                                <div className="graphmiddl">
                                    <div className="graphlst">
                                        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "80px" }}>
                                            <p className="statsT">PIGEONS RACING STATS</p>
                                        </div>
                                        <div style={{ width: "100%", marginBottom: "50px", marginTop: "30px" }}>
                                            <Container>
                                                <Row>
                                                    <Col sm>
                                                        <div style={{ display: "flex" }}>
                                                            <img src={Pigeon} style={{ width: "80px" }} />
                                                            &nbsp; &nbsp;
                                                            <p className="BOTNAR">
                                                                BOTNAR STEFAN<br />
                                                                #003a96<br />
                                                                CREDIT VALUE &nbsp; &nbsp; <span className="Cvalue">347</span>
                                                            </p>
                                                        </div>
                                                    </Col>
                                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                    <Col sm>
                                                        <div style={{ width: 80, height: 80, color: "green" }}>
                                                            <CircularProgressbar value={66} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>

                                        </div>


                                        <BarChart data={data} />

                                    </div>
                                </div>
                            </Modal.Body>

                        </Modal>

                        <Modal show={this.state.set} >
                            <Modal.Header style={{ backgroundColor: "#003a96" }}>

                                <Modal.Title style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                    <h3 className="Resell">Re-Sell Your Pigeon</h3>
                                    <div><img src={closeicon} style={{ width: "30px", height: "27", left: "20" }} onClick={() => this.setState({ show: false })} /></div>

                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="graphmain">
                                <div className="grapiddl">
                                    <div id="lawmain">
                                        <img src={LAW} className="lawimg" />
                                    </div>
                                    <Container style={{ width: "100%" }}>
                                        <Row>
                                            <Col sm>
                                                <img src={Pigeon} />
                                            </Col>
                                            <Col sm>
                                                <p className="canadatext">
                                                    &nbsp; &nbsp; &nbsp; <img src={Canada} className="canadaimg" />
                                                    <br />
                                                    ALFONS KLAUS <br />
                                                    THE PIEGON NAME <br />
                                                    BX 233 E45455 <br />
                                                    THE PIEGON NAME <br />
                                                </p>
                                                {/* <br /> */}
                                                <p className="seconcanadatx" >
                                                    You Paid  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span className="numberred">456</span><br />
                                                    Current Value  &nbsp; &nbsp; &nbsp; <span className="numberred">4543</span>
                                                </p>

                                            </Col>
                                        </Row>
                                    </Container>
                                    <div id="maindd">
                                        <div id="half">
                                            <p className="texttt">IF YOU SELL KNOW YOU WILL GET <br />
                                                <span style={{ color: "red", fontSize: "medium" }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4534</span> &nbsp; &nbsp; CREDITS
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                        <button className="sellpigeon">SELL PIGEON</button>
                                    </div>
                                </div>
                            </Modal.Body>

                        </Modal>
                        <Slider {...settings} >

                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>



                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>
                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>
                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>
                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>
                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>
                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>
                            <div className="slidecrd">
                                <div className="toppp">
                                    <span className="Rank">
                                        RAKING:
                                    </span>
                                    <div className="mainbox">
                                        <span className="one1">1</span>

                                    </div>
                                    <div className="mainbox">

                                    </div>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <img src={Pigeon} className="pigeonn" />
                                    <p className="texxxt">
                                        KUNAT <br />
                                        All Neran Left <br />
                                        KW WATANYA 21-798177
                                    </p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p className="botomtex">
                                        CREDIT VALLUE <br />
                                        <span className="numbr">6898</span><br />
                                        <button className="lastbutn" onClick={() => this.setState({ show: true })}> View Pigeon</button><br />
                                        <button className="lastbutn" onClick={() => this.setState({ set: true })}>Sell Pigeon</button>
                                    </p>
                                    <div style={{ width: 50, height: 50, marginLeft: 20, marginRight: -200, marginTop: 20 }}>
                                        <CircularProgressbar value={70} />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </Container>

        );
    }
}