import React, { Component } from "react";
import { Container, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "./Largeslider.css"
import boximg1 from "./../../Images/inslide.jpg"
import boxicon from "./../../Images/china.jpg"
import boxicon1 from "./../../Images/AUSTRALIA.jpg"
import boxicon2 from "./../../Images/canada.jpg"
import boximg2 from "./../../Images/inslide2.jpg"
import boximg3 from "./../../Images/inslide3.jpg"
import boximg4 from "./../../Images/1 (2).jpg"
import china from "./../../Images/china.jpg"
import inslide from "./../../Images/inslide.jpg"
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png"

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
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1224,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
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
        return (
         

                <div id="mindivm">
                    <div id="hafdiv">
                        <h6 id="hafdivtxt">NEXT UPCOMING RACES</h6>
                    </div>
                    <div id="mainsld">
                        <Modal
                            size="sm"
                            // show={dmShow}
                            show={this.state.set}
                            // onHide={() => setDmShow(false)}
                            aria-labelledby="example-modal-sizes-title-sm"
                        >
                            <Modal.Header style={{ backgroundColor: "#003a96" }}>
                                <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
                                    <button className="enteracebtn">BUY A LOFT</button>
                                    {/* <img src={fantasy} style={{ width: "50px" }} /> */}
                                    <div><img src={closeicon} className="ose" onClick={() => this.setState({ set: false })} /></div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="mainbody">
                                <div className="middlbody">
                                    <div className="lastbody">
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
                                        <div className="mainFee">

                                            <p className="Fee">COST OF LOFT <span style={{color:"red"}}> &nbsp; $  &nbsp;  30</span></p>

                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <p>

                                                <span style={{ fontSize: "x-small" }}> &nbsp; &nbsp; &nbsp; &nbsp; Balance</span><br />
                                                <span style={{ fontWeight: "900", fontSize: "large" }}>$    450.00 <br /></span>
                                            </p>
                                            {/* <br /> */}
                                        </div>
                                        {/* <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                            <p id="CreditR">Select Credits Required
                                                <select id="inputgnup">
                                                    <option value="grapefruit">Get 1000 credist for $ 10 dollor</option>
                                                    <option value="lime">Get 1000 credist for $ 10 dollor</option>
                                                    <option selected value="coconut">Get 1000 credist for $ 10 dollor</option>
                                                    <option value="mango">Get 1000 credist for $ 10 dollor</option>
                                                </select>
                                            </p>
                                        </div> */}
                                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                            <button id="enterrc">GET YOUR LOFT</button>
                                        </div>
                                    </div>
                                </div>

                            </Modal.Body>
                        </Modal>

                        <Slider {...settings} >
                            <div className="slidecrd">
                                <img src={boximg1} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Pattaya One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>
                            </div>
                            <div className="slidecrd">
                                <img src={boximg2} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Pattaya One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>
                            </div>
                            <div className="slidecrd">
                                <img src={boximg3} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Pattaya One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>
                            </div>
                            <div className="slidecrd">
                                <img src={boximg4} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Geppi  One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>
                            </div>
                            <div className="slidecrd">
                                <img src={boximg1} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Pattaya One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>

                            </div>

                            <div className="slidecrd">
                                <img src={boximg1} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Australia One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>
                            </div>
                            <div className="slidecrd">
                                <img src={boximg1} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Pattaya One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>
                            </div>
                            <div className="slidecrd">
                                <img src={boximg1} className='boximg' />
                                <div className="icontxman">  <img src={boxicon} className="icnbx" /> <p className="cardp">Pattaya One Loft <br />
                                </p></div>
                                <div className="datimmain">
                                    <span className="datme">2022-05-21</span>

                                </div>
                                <buttton className="startRbtn" onClick={() => this.setState({ set: true })}>BUY A LOFT</buttton>
                            </div>
                        </Slider>
                    </div>
                </div>
        

        );
    }
}