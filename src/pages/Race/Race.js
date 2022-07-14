import React, { useState } from "react";
import Navbar from "./../../Components/Navbar/index";
import Linebar from "./../../Components/Linebar/Linebar";
import Section2 from "./../../Components/Section2/section2";
import Vsection from "./../../Components/VideoSection/Vsection";
import Full from "./../../Components/FullSlider/full";
import SecWeb from "../../Components/SectionWeb/secweb";
import Footer from "./../../Components/Footer/footer";
import { Container } from "react-bootstrap";
function Race() {
  const [smShow, setSmShow] = useState(false);
  const [modaltype, setmodaltype] = useState("wallet");
  const [controllFull, setControllFull] = useState(false);
  const [controllFull2, setControllFull2] = useState(false);
  const [viewp, setViewp] = useState(false);
  return (
    <>
      <Navbar />
      <Linebar />
      <Container>
        <br />
        <br />
        <br />
        <br />
        <div>
          <Section2
            smShow={smShow}
            setSmShow={setSmShow}
            modaltype={modaltype}
            setmodaltype={setmodaltype}
          />
        </div>

        <Vsection
          controllFull={controllFull}
          setControllFull={setControllFull}
          smShow1={smShow}
          setSmShow1={setSmShow}
          modaltype1={modaltype}
          setmodaltype1={setmodaltype}
          controllFull2={controllFull2}
          setControllFull2={setControllFull2}
          viewp={viewp}
          setViewp={setViewp}
        />

        <div>
          <Full
            controllFull={controllFull}
            setControllFull={setControllFull}
            smShow1={smShow}
            setSmShow1={setSmShow}
            modaltype1={modaltype}
            setmodaltype1={setmodaltype}
            controllFull2={controllFull2}
            setControllFull2={setControllFull2}
            viewp={viewp}
            setViewp={setViewp}
          />
        </div>
        <br />
        <div>
          <div>
            <br />
            <Footer />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Race;
