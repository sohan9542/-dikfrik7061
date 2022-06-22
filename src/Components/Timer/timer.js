import React from "react";
import Timerimg from "./../../Images/thrthtrh.jpg"
import topimg from "./../../Images/fantasy league.jpg"
import CountdownTimer from "react-component-countdown-timer";
import "./Timer.css"
export default function Timer() {
  var settings = {
    count: 5432,
    border: false,
    noPoints: false,
    backgroundColor: "#1d67cd",
    id: "_timer",
    direction: "left",
    responsive: true

  };
  return (
    <div id="timerimgmain">
      <br />
      <img src={topimg} id="topimg"/>
      <div id="topmain">
        <span id="top1"> To Get a Super Big Win Now!</span><br/>
        <span id="top2">Next MAIN FINAL Race is in</span>
      </div>
      {/* <img src={Timerimg} className="Timerimmg"/> */}
      <div className="_label_div"> <span className="timertitle">DAYS</span> <span className="timertitle">HOURS</span> <span className="timertitle">MIN</span> <span className="timertitle">SEC</span></div>
      <CountdownTimer {...settings} />
      <br />
      <br />
      <br />
    </div>
  )
}