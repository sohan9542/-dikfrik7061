import React, { Component, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "./Largeslider.css";
import boximg1 from "./../../Images/inslide.jpg";
import boxicon from "./../../Images/china.jpg";
import boxicon1 from "./../../Images/AUSTRALIA.jpg";
import boxicon2 from "./../../Images/canada.jpg";
import boximg2 from "./../../Images/inslide2.jpg";
import boximg3 from "./../../Images/inslide3.jpg";
import fantasy from "./../../Images/fantasy league.webp";
import happy from "./../../Images/happy.webp";
import boximg4 from "./../../Images/1 (2).jpg";
import china from "./../../Images/china.jpg";
import inslide from "./../../Images/inslide.jpg";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
import { Link } from "react-router-dom";
const Largeslider = ({ setSmShow1, setmodaltype1 }) => {
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
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [show, setShow] = useState(false);
  const [buy, setBuy] = useState(false);
  return (
    <div id="mindivm">
      <div id="hafdiv">
        <h6 id="hafdivtxt">NEXT UPCOMING RACES</h6>
      </div>
      <div id="mainsld">
        <Modal
          size="sm"
          // show={dmShow}
          show={show}
          // onHide={() => setDmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header style={{ backgroundColor: "#003a96" }}>
            <Modal.Title id="example-modal-sizes-title-sm" className="smallman">
              <button className="enteracebtn">BUY A LOFT</button>
              {/* <img src={fantasy} style={{ width: "50px" }} /> */}
              <div>
                <img
                  src={closeicon}
                  className="ose"
                  onClick={() => setShow(false)}
                />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="mainbody">
            {buy === false ? (
              <div className="middlbody">
                <div className="lastbody">
                  <div
                    style={{
                      marginLeft: "7px",
                      display: "flex",
                      paddingTop: "10px",
                    }}
                  >
                    <img
                      src={china}
                      style={{ width: "30px", height: "30px" }}
                    />
                    <p
                      className="patya"
                      style={{ color: "black", marginLeft: "5px" }}
                    >
                      PATAYA ONE LOFT <br />
                      27 MAY 2023 06H00
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <img src={inslide} className="imgsiz" />
                    <p className="recivetext">
                      LOFT PEARCH FEE <br />
                      <span className="redcolr"> $ 30 </span>
                      <br />
                      # OF PIGEONS ENTERED
                      <br />
                      <span className="redcolr">3000 </span>
                      <br />
                      FREE CREDITS RECEIVE
                      <br />
                      <span className="redcolr"> 6578</span>
                    </p>
                  </div>
                  <div className="mainFee">
                    <p className="Fee">
                      COST OF LOFT{" "}
                      <span style={{ color: "red" }}> &nbsp; $ &nbsp; 30</span>
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <p>
                      <span style={{ fontSize: "x-small" }}>
                        {" "}
                        &nbsp; &nbsp; &nbsp; &nbsp; Balance
                      </span>
                      <br />
                      <span style={{ fontWeight: "900", fontSize: "large" }}>
                        $ 450.00 <br />
                      </span>
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
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <button onClick={() => setBuy(true)} id="enterrc">
                      BUY YOUR LOFT
                    </button>
                    <button onClick={()=>{
                        setSmShow1(true)
                        setmodaltype1("wallet")
                        setShow(false)
                    }} id="enterrcGreen">TOP UP LOFT</button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  background: "white",
                  padding: "15px",
                  borderRadius: "20px",
                  position: "relative",
                }}
              >
                <img
                  src={fantasy}
                  style={{
                    position: "absolute",
                    top: "-30px",
                    left: "35%",
                    zIndex: "40",
                  }}
                  alt=""
                />
                <h1
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "#BADA55",
                    paddingTop: "30px ",
                    textAlign: "center",
                  }}
                >
                  PAYMENT SUCCESFULL
                </h1>
                <div
                  style={{
                    paddingTop: "20px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={happy} alt="" />
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <buttton
                      className="startRbtn"
                      onClick={() => setShow(false)}
                    >
                      GO TO MY DASHBOARD
                    </buttton>
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>

        <Slider {...settings}>
          <div className="slidecrd">
            <img src={boximg1} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Pattaya One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>
          <div className="slidecrd">
            <img src={boximg2} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Pattaya One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>
          <div className="slidecrd">
            <img src={boximg3} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Pattaya One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>
          <div className="slidecrd">
            <img src={boximg4} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Geppi One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>
          <div className="slidecrd">
            <img src={boximg1} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Pattaya One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>

          <div className="slidecrd">
            <img src={boximg1} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Australia One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>
          <div className="slidecrd">
            <img src={boximg1} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Pattaya One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>
          <div className="slidecrd">
            <img src={boximg1} className="boximg" />
            <div className="icontxman">
              {" "}
              <img src={boxicon} className="icnbx" />{" "}
              <p className="cardp">
                Pattaya One Loft <br />
              </p>
            </div>
            <div className="datimmain">
              <span className="datme">2022-05-21</span>
            </div>
            <buttton className="startRbtn" onClick={() => setShow(true)}>
              BUY A LOFT
            </buttton>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Largeslider;
