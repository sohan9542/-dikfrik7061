import React from "react";
import Navbar from "./../../Components/Navbar/index";
import Linebar from "./../../Components/Linebar/Linebar";
import SectionDiv from "./../../Components/SectionDiv/SectionDiv";
import Sectiond from "./../../Components/DashbordSection1/Dashbordsection";
import ButtonLine from "../../Components/ButtonLine/buttonline";
import Largeslider from "./../../Components/Largeslider/largeslider";
import Footer from "./../../Components/Footer/footer";
import { Container } from "react-bootstrap";
import "./Dasbord.css";
import { Row, Col } from "react-bootstrap";
function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
          <Sectiond />
        </Container>
      </div>

      <div>
        <ButtonLine />
      </div>
      <Container>
        <div className="styleGrid">
          <div className="colspan3">
            <Largeslider />
            <br />
            <br />
            <SectionDiv />
          </div>
          <div className="rightSide">
            <div className="header">MY ONE LOFT RACES ENTERED</div>
            <div className="body">
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
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
               <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", padding:"0 20px"}}>
               <buttton
               style={{ display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer"}}
                  className="startRbtn2"
                 
                >
                  VIEW / ENTER RACES
                </buttton>
               </div>
              </div>
            </div>
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
