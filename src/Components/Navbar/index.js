import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "./../../Images/logo.png";
import livechat from "./../../Images/chatlive.png";
import message from "./../../Images/message 34.png";
import Profile from "./../../Images/PROFILEPIC.png";
import Logoutimg from "./../../Images/LOGOUT.png";
import logosignup from "./../../Images/fantasy league.jpg";
import { Link } from "react-router-dom";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
// import Signup from "./../../Components/SignUpLogn/Signup"
import img1 from "../../Images/race/1.jpg";
import img2 from "../../Images/race/2.png";
import img3 from "../../Images/race/3.png";
import img4 from "../../Images/race/4.png";
import img5 from "../../Images/race/5.png";
import img6 from "../../Images/race/6.png";
import img7 from "../../Images/race/7.png";
import img8 from "../../Images/race/8.png";
import img9 from "../../Images/race/9.png";
import img10 from "../../Images/race/10.png";
import img11 from "../../Images/race/11.png";
import img12 from "../../Images/race/12.png";
import img13 from "../../Images/race/13.png";
import img14 from "../../Images/race/14.png";
import img15 from "../../Images/race/15.png";
import img16 from "../../Images/race/16.png";
import img17 from "../../Images/race/17.png";
import img18 from "../../Images/race/18.png";
import img19 from "../../Images/race/19.png";
import img20 from "../../Images/race/20.png";
import img21 from "../../Images/race/21.png";
import img22 from "../../Images/race/22.png";
import img23 from "../../Images/race/23.png";
import img24 from "../../Images/race/24.png";
import img25 from "../../Images/race/25.png";
import img26 from "../../Images/race/26.png";
import img27 from "../../Images/race/27.png";
import img28 from "../../Images/race/28.png";
import {
  NavDropdown,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  Modal,
} from "react-bootstrap";
import Select from "react-select";
import { MainContent } from "../../Config/Router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { URI } from "../../App";

let counter = 0;
function MyNavbar({}) {
  const {
    setIsAuthenticated,
    isAuthenticated,
    authModal,
    setAuthModal,
    modaltype,
    setmodaltype,
  } = useContext(MainContent);
  // function Example() {
  const countries = [
    {
      value: 1,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img1} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 2,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img2} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 3,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img3} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 4,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img4} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 5,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img5} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 6,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img6} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 7,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img7} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 8,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img8} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 9,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img9} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 10,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img10} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 11,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img11} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 12,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img12} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 13,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img13} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 14,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img14} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 15,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img15} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 16,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img16} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 17,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img17} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 18,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img18} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 19,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img19} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 20,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img20} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 21,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img21} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 22,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img22} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 23,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img23} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 24,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img24} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 25,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img25} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 26,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img26} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 27,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img27} height="20px" width="20px" />{" "}
        </div>
      ),
    },
    {
      value: 28,
      label: (
        <div style={{ fontSize: "12px" }}>
          <img src={img28} height="20px" width="20px" />{" "}
        </div>
      ),
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [country, setCountry] = useState({
    value: 1,
    label: (
      <div style={{ fontSize: "12px" }}>
        <img src={img1} height="20px" width="20px" />{" "}
      </div>
    ),
  });
  const signup = (data) => {
    let body = data;
    body.outfit = country.value;
    console.log(body);

    axios
      .post(`${URI}user-register`, body)
      .then((res) =>
        toast.success(res?.data?.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
      .catch((err) => {
        // console.log(err);
        const errorkey = Object.keys(err.response.data)[0];
        // console.log(err.response.data[errorkey])

        toast.error(err.response.data[errorkey][0], {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => setAuthModal(false));
  };
  const login = (data) => {
    let body = data;
    axios
      .post(`${URI}user-login`, body)
      .then((res) => {
        if (res.data.access_token) {
          toast.success(res?.data?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          localStorage.setItem("user_pegion", res?.data?.access_token);
          localStorage.setItem("user_profile_info", JSON.stringify(res?.data?.profile_info));
          setIsAuthenticated(true);
        } else {
          toast.error(res?.data?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setAuthModal(false);
      })
      .catch((err) => {
        // console.log(err);
        const errorkey = Object.keys(err.response.data)[0];
        // console.log(err.response.data[errorkey])

        toast.error(err.response.data[errorkey][0], {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => setAuthModal(false));
  };
  const logout = () => {
    localStorage.removeItem("user_pegion");
    localStorage.removeItem("user_profile_info");
    setIsAuthenticated(false);
  };
  const [forgetEmail, setForgetEmail] = useState("");
  const forgetPass = (data) => {
   
    axios
      .post(`${URI}forgot-password`, {
        email: forgetEmail,
      })
      .then((res) =>
        {
          toast.success(res?.data?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          localStorage.setItem("forgetEmail", forgetEmail)
        }
      )
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => setAuthModal(false));
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        id="Navbar"
        position="fixed"
      >
        <Container>
          <Navbar.Brand>
            <img src={Logo} className="logoweb" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <div className="pagesmain">
                  <img src={livechat} className="icons" />
                  <p className="navbarpages">LIVECHAT</p>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="pagesmain">
                  <img src={message} className="icons" />
                  <p className="navbarpages">MESSAGE</p>
                </div>
              </Nav.Link>

              {isAuthenticated === true && (
                <>
                  <Nav.Link>
                    <div className="pagesmain">
                      <img src={Profile} className="icons" />
                      <p className="navbarpages">PROFILENAME</p>
                    </div>
                  </Nav.Link>{" "}
                  <Nav.Link>
                    <div onClick={logout} className="pagesmain">
                      <img src={Logoutimg} className="icons" />
                      <p className="navbarpages">LOGOUT</p>
                    </div>
                  </Nav.Link>
                </>
              )}
              {isAuthenticated === false && (
                <>
                  <Nav.Link>
                    <button
                      id="lognbutn"
                      onClick={() => {
                        setAuthModal(true);
                        setmodaltype("login1");
                      }}
                    >
                      Login
                    </button>
                  </Nav.Link>
                  <Nav.Link>
                    <button
                      id="signupbutn"
                      onClick={() => {
                        setAuthModal(true);
                        setmodaltype("signup");
                      }}
                    >
                      Sign Up
                    </button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Modal
          size="sm"
          show={authModal}
          // onHide={() => setAuthModal(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          id="modl"
        >
          <Modal.Header className="manButn">
            <Modal.Title id="example-modal-sizes-title-sm">
              <div style={{ display: "flex" }}>
                <div>
                  <button
                    className="LoginSignUp"
                    id="loginbtn"
                    onClick={() => setmodaltype("signup")}
                    style={{ color: modaltype === "signup" ? "red" : "white" }}
                  >
                    SIGN UP
                  </button>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <button
                      className="LoginSignUp"
                      onClick={() => setmodaltype("login1")}
                      style={{
                        color: modaltype === "login1" ? "red" : "white",
                      }}
                    >
                      LOG IN
                    </button>
                  </div>
                  <img
                    src={closeicon}
                    className="close"
                    onClick={() => {
                      setAuthModal(false);
                    }}
                  />
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ backgroundColor: "#003a96", marginTop: "-10px" }}
          >
            {modaltype === "login1" && (
              <form onSubmit={handleSubmit(login)}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div id="signupline">Login On Compupigeon</div>

                  <img src={logosignup} id="signuplogo" />
                </div>
                <div className="signupmain" id="signinbtn">
                  <span className="inputtitle">Email Address*</span>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Address"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Enter Password*</span>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    placeholder="Enter Password"
                    className="inputsignup"
                  />

                  <div id="forgotmain">
                    <div>
                      <input type="checkbox" />
                      <span className="inputtitle">Remember me</span>
                    </div>
                    <button onClick={() => setmodaltype("forget")} id="forgot">
                      Forgot Password
                    </button>
                  </div>
                  <div className="lastpricy">
                    <p className="lasttex">
                      Please read our Terms of Use and Privacy Policies
                    </p>
                    <button className="lastsignbutn" type="submit">
                      LOGIN
                    </button>
                    <div>
                      <p style={{ fontSize: "small", color: "white" }}>
                        Not a member?{" "}
                        <a href="#" onClick={() => setmodaltype("signup")}>
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            )}
            {modaltype === "signup" && (
              <form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "100%",
                }}
                id="mainS"
                onSubmit={handleSubmit(signup)}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div id="signupline">Register On Compupigeon</div>

                  <img src={logosignup} id="signuplogo" />
                </div>
                <div className="signupmain">
                  <span className="inputtitle">Enter your Name*</span>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter your Name"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Email Address*</span>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Address"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Enter Password*</span>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Enter Password"
                    className="inputsignup"
                  />

                  <span className="inputtitle">Select your Country*</span>
                  <select
                    {...register("country", { required: true })}
                    className="inputsignup"
                  >
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option selected value="Algeria">
                      Algeria
                    </option>
                    <option value="Andorra">Andorra</option>
                  </select>
                  <span className="inputtitle">Mobile Number*</span>
                  <input
                    {...register("mobile", { required: true })}
                    type="number"
                    placeholder="Mobile Number"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Enter a loft Name*</span>
                  <input
                    type="text"
                    {...register("loft_name", { required: true })}
                    placeholder="Enter a loft Name*"
                    className="inputsignup"
                  />
                  <span className="inputtitle">Select Your Outfit*</span>

                  <p style={{ display: "none" }}> {counter++}</p>
                  <Select
                    value={country}
                    onChange={(e) => setCountry(e)}
                    options={countries}
                  />

                  <div className="lastpricy">
                    <p className="lasttex">
                      Please read our Terms of Use and Privacy Policies
                    </p>
                    <button type="submit" className="lastsignbutn">
                      SIGN UP
                    </button>
                  </div>
                </div>
              </form>
            )}
            {modaltype === "forget" && (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div id="signupline">Forgot password</div>

                  <img src={logosignup} id="signuplogo" />
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    forgetPass();
                  }}
                  className="signupmain"
                  id="signinbtn"
                >
                  <span className="inputtitle">Email Address*</span>
                  <input
                    type="email"
                    required
                    onChange={(e) => setForgetEmail(e.target.value)}
                    placeholder="Enter Address"
                    className="inputsignup"
                  />

                  <div className="lastpricy">
                    <p className="lasttex">
                      Please read our Terms of Use and Privacy Policies
                    </p>
                    <button type="submit" className="lastsignbutn">
                      RESET
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Modal.Body>
        </Modal>
        {/* <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal> */}
      </Navbar>
    </div>
  );
}
export default MyNavbar;
