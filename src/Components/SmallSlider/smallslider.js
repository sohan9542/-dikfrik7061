import React, { Component } from "react";
import Slider from "react-slick";
// import smalimg from "./../../Images/ftrhfthjntf.jpg"
import "./smallslidr.css";
import boximg1 from "./../../Images/inslide.jpg";
import boxicon from "./../../Images/china.jpg";
import boxicon1 from "./../../Images/AUSTRALIA.jpg";
import boxicon2 from "./../../Images/canada.jpg";
import boximg2 from "./../../Images/inslide2.jpg";
import boximg3 from "./../../Images/inslide3.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Smallslider = ({ setmodaltype, setSmShow }) => {
  return (
    <div id="mainsmall">
      <div id="maindivm">
        <div id="halfdiv">
          <h6 id="hafdivtext">NEXT UPCOMING RACES</h6>
        </div>
        <div id="mainslid">
          <Slider {...settings}>
            <div className="slidecard">
              <img src={boximg1} className="boximg" />
              <div className="icontexman">
                {" "}
                <img src={boxicon} className="iconbx" />{" "}
                <p className="cardp">
                  Pattaya One Loft <br />
                  &nbsp; &nbsp; Race 12
                </p>
              </div>
              <div className="datimemain">
                <span className="datime">2022-05-21</span>
                <span className="datime">11:03:67:23</span>
              </div>
              <buttton  onClick={() => {
                  setmodaltype("signup");
                  setSmShow(true);
                }}  className="startRbutn">Start Racing </buttton>
            </div>

            <div className="slidecard">
              <img src={boximg2} className="boximg" />
              <div className="icontexman">
                {" "}
                <img src={boxicon1} className="iconbx" />{" "}
                <p className="cardp">
                  Australia One Loft
                  <br />
                  &nbsp; &nbsp; Race 1
                </p>
              </div>
              <div className="datimemain">
                <span className="datime">2022-05-21</span>
                <span className="datime">11:03:67:23</span>
              </div>
              <buttton
                className="startRbutn"
                onClick={() => {
                  setmodaltype("signup");
                  setSmShow(true);
                }}
              >
                Start Racing{" "}
              </buttton>
            </div>

            <div className="slidecard">
              <img src={boximg3} className="boximg" />
              <div className="icontexman">
                {" "}
                <img src={boxicon2} className="iconbx" />{" "}
                <p className="cardp">
                  Pattaya One Loft <br />
                  &nbsp; &nbsp; Race 12
                </p>
              </div>
              <div className="datimemain">
                <span className="datime">2022-05-21</span>
                <span className="datime">11:03:67:23</span>
              </div>
              <buttton
                className="startRbutn"
                onClick={() => {
                  setmodaltype("signup");
                  setSmShow(true);
                }}
              >
                Start Racing{" "}
              </buttton>
            </div>

            <div className="slidecard">
              <img src={boximg1} className="boximg" />
              <div className="icontexman">
                {" "}
                <img src={boxicon} className="iconbx" />{" "}
                <p className="cardp">
                  Pattaya One Loft <br />
                  &nbsp; &nbsp; Race 12
                </p>
              </div>
              <div className="datimemain">
                <span className="datime">2022-05-21</span>
                <span className="datime">11:03:67:23</span>
              </div>
              <buttton
                className="startRbutn"
                onClick={() => {
                  setmodaltype("signup");
                  setSmShow(true);
                }}
              >
                Start Racing{" "}
              </buttton>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Smallslider;
