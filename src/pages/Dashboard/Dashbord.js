import React, { useState } from "react";
import Navbar from "./../../Components/Navbar/index";
import Linebar from "./../../Components/Linebar/Linebar";
import SectionDiv from "./../../Components/SectionDiv/SectionDiv";
import Sectiond from "./../../Components/DashbordSection1/Dashbordsection";
import ButtonLine from "../../Components/ButtonLine/buttonline";
import Largeslider from "./../../Components/Largeslider/largeslider";
import Footer from "./../../Components/Footer/footer";
import { Container } from "react-bootstrap";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
import fantasy from "./../../Images/fantasy league.webp";
import cup from "./../../Images/cup.webp";
import hlock from "./../../Images/hlock.webp";
import "./Dasbord.css";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [smShow, setSmShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modaltype, setmodaltype] = useState("wallet");
  const navigation = useNavigate()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Modal
        size="sm"
        show={modalShow}
        // onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header className="manButn">
          <div>
            {/* <img src={Gold} id="goldenicon" /> */}
            <button id="funfM">ENTER RACE</button>
            <img
              src={fantasy}
              style={{ width: "45px", objectFit: "contain" }}
              alt=""
            />
          </div>

          <img
            src={closeicon}
            className="cse"
            onClick={() => {
              setModalShow(false);
            }}
          />
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#003a96",
            marginTop: "-10px",
            height: "600px",
            overflowY: "scroll",
          }}
        >
          {[1, 1, 1, 1, 1, 1, 1].map((ite) => (
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "10px",
                marginTop: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div>
                  <h6
                    style={{
                      color: "red",
                      fontSize: "12px",
                      fontWeight: "600",
                      marginTop: "5px",
                      paddingBottom: "0",
                    }}
                  >
                    RACE#
                  </h6>
                  <h6
                    style={{
                      color: "red",
                      padding: "5px",
                      border: "1px solid black",
                      borderRadius: "6px",
                      fontSize: "20px",
                    }}
                  >
                    12
                  </h6>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <img
                      style={{
                        width: "35px",
                        objectFit: "contain",
                      }}
                      src="https://static.wixstatic.com/media/416fe9_c43b6f8ec0c04a0eafc7a6597ebcf394~mv2.png/v1/fill/w_34,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
                      alt=""
                    />
                    <div>
                      <img
                        style={{ width: "25px", objectFit: "contain" }}
                        src="https://static.wixstatic.com/media/416fe9_402d0ce51b33480eb622d873a0143918~mv2.png/v1/fill/w_24,h_24,al_c,q_85,enc_auto/china.png"
                        alt=""
                      />
                      <h6 style={{ fontSize: "12px", fontWeight: "600" }}>
                        Pattaya One Loft
                      </h6>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <h6
                      style={{
                        fontSize: "10px",
                        color: "rgb(89,89,89)",
                      }}
                    >
                      27 MAY 2023
                    </h6>
                    <h6
                      style={{
                        fontSize: "10px",
                        color: "rgb(89,89,89)",
                      }}
                    >
                      06H00
                    </h6>
                  </div>
                </div>
                <img
                  style={{ width: "35px", objectFit: "contain" }}
                  src={cup}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3
                    style={{
                      fontSize: "12px",

                      fontWeight: "600",
                    }}
                  >
                    TRAINING RACE
                  </h3>
                  <img
                    style={{ width: "25px", objectFit: "contain" }}
                    src={hlock}
                    alt=""
                  />
                </div>
                <div>
                  <h6 style={{ fontSize: "12px" }}>
                    COST :<span style={{ color: "red" }}> $30</span>
                  </h6>
                  <buttton
                    onClick={() => {
                      setModalShow(false)
                      navigation("/Race")
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      background: "red",
                      color: "white",
                      fontSize: "12px",
                      padding: "4px 18px",
                      borderRadius: "20px",
                    }}
                  >
                    ENTER RACES
                  </buttton>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
      <div>
        <Navbar />
      </div>
      <div>
        <Linebar />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Container>
          <Sectiond
            smShow={smShow}
            setSmShow={setSmShow}
            modaltype={modaltype}
            setmodaltype={setmodaltype}
          />
        </Container>
      </div>

      <div>
        <ButtonLine />
      </div>
      <Container>
        <div className="styleGrid">
          <div className="colspan3">
            <Largeslider setSmShow1={setSmShow} setmodaltype1={setmodaltype} />
            <br />
            <br />
            <SectionDiv />
          </div>
          <div className="rightSide">
            <div className="header">MY ONE LOFT RACES ENTERED</div>
            <div className="body">
            {
              [0,0,0,0,0,0,0,0].map((i)=>(
                <div className="smCard">
                <div className="top">
                  <img
                    style={{ width: "25px", objectFit: "contain" }}
                    src="https://static.wixstatic.com/media/416fe9_402d0ce51b33480eb622d873a0143918~mv2.png/v1/fill/w_24,h_24,al_c,q_85,enc_auto/china.png"
                    alt=""
                  />
                  <img
                    style={{
                      width: "35px",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                    src="https://static.wixstatic.com/media/416fe9_c43b6f8ec0c04a0eafc7a6597ebcf394~mv2.png/v1/fill/w_34,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
                    alt=""
                  />
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>
                    Pattaya One Loft
                  </h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "14px",
                      color: "rgb(89,89,89)",
                      fontWeight: "600",
                    }}
                  >
                    NEXT RACE IN{" "}
                  </h3>
                  <h3
                    style={{
                      fontSize: "14px",
                      color: "rgb(89,89,89)",
                      fontWeight: "600",
                    }}
                  >
                    11:03:67:23{" "}
                  </h3>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 20px",
                  }}
                >
                  <buttton
                    onClick={() => setModalShow(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    className="startRbtn2"
                  >
                    VIEW / ENTER RACES
                  </buttton>
                </div>
              </div>
              ))
            }
            </div>
          </div>
        </div>
        <div className="styleGrid1">
          <div className="colspan3">
            <Largeslider setSmShow1={setSmShow} setmodaltype1={setmodaltype} />
            <br />
            <br />
            <div className="rightSide">
            <div className="header">MY ONE LOFT RACES ENTERED</div>
            <div className="body">
            {
              [0,0,0,0,0,0,0,0].map((i)=>(
                <div className="smCard">
                <div className="top">
                  <img
                    style={{ width: "25px", objectFit: "contain" }}
                    src="https://static.wixstatic.com/media/416fe9_402d0ce51b33480eb622d873a0143918~mv2.png/v1/fill/w_24,h_24,al_c,q_85,enc_auto/china.png"
                    alt=""
                  />
                  <img
                    style={{
                      width: "35px",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                    src="https://static.wixstatic.com/media/416fe9_c43b6f8ec0c04a0eafc7a6597ebcf394~mv2.png/v1/fill/w_34,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
                    alt=""
                  />
                  <h6 style={{ fontSize: "16px", fontWeight: "600" }}>
                    Pattaya One Loft
                  </h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "14px",
                      color: "rgb(89,89,89)",
                      fontWeight: "600",
                    }}
                  >
                    NEXT RACE IN{" "}
                  </h3>
                  <h3
                    style={{
                      fontSize: "14px",
                      color: "rgb(89,89,89)",
                      fontWeight: "600",
                    }}
                  >
                    11:03:67:23{" "}
                  </h3>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 20px",
                  }}
                >
                  <buttton
                    onClick={() => setModalShow(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    className="startRbtn2"
                  >
                    VIEW / ENTER RACES
                  </buttton>
                </div>
              </div>
              ))
            }
            </div>
          </div>
            <SectionDiv />
            <br />
            <br />
          </div>
        
        </div>
      </Container>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Dashboard;
