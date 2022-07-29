import { React, useState, useEffect } from "react";
import "./buttonline.css";
import { Container, Row, Col } from "react-bootstrap";
import lobby from "./../../Images/MAIN LOFT.jpg";
import loft from "./../../Images/eredre3.jpg";
import log from "./../../Images/fantasy league.jpg";
import Gold from "./../../Images/goldf.webp";
import profileicon from "./../../Images/Profilemy.png";
import casier from "./../../Images/cashier.png";
import statistics from "./../../Images/statistics.png";
import closeicon from "./../../Images/52-521935_close-white-close-button-png-removebg-preview.png";
import Pagination from "react-bootstrap/Pagination";
import { useForm } from "react-hook-form";
import Select from "react-select";
import {toast} from "react-toastify"
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
  Nav,
  Form,
  FormControl,
  onHide,
  flase,
  Button,
  Navbar,
  Modal,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { URI } from "../../App";
import axios from "axios";
let active = 1;
let items = [];
let counter = 0;
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
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
function ButtonLine() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [country, setCountry] = useState({
    value: 1,
    label: (
      <div style={{ fontSize: "12px" }}>
        <img src={img1} height="20px" width="20px" />{" "}
      </div>
    ),
  });

  const [profile_info, setProfile_info] = useState({})
  useEffect(() => {
 const user_profile_info = JSON.parse(localStorage.getItem("user_profile_info"))
 setProfile_info(user_profile_info)
//  console.log(countries.filter((item)=>item.value == user_profile_info?.outfit))
 setCountry(countries.filter((item)=>item.value == user_profile_info?.outfit)[0])
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const update = (data)=>{
let body = data
body.outfit = country.value
var config = {
  method: 'post',
  url: `${URI}update-user-profile`,
  headers: { 
    'Authorization': `Bearer ${localStorage.getItem("user_pegion")}`, 
  },
  data : body
};

axios(config)
.then(function (res) {
  localStorage.setItem("user_profile_info", JSON.stringify(body));
  toast.success(res?.data?.message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
 setTimeout(() => {
  window.location.reload()
 }, 3000);
})
.catch(function (error) {
  console.log(error);
})
.finally(()=>setSmShow(false))
  }
  return (
    <Container id="buttonlin">
      <div className="deskShow">
        <div>
          <button className="buttons" id="loby">
            MY LOBBY <img src={lobby} style={{ width: "40px" }} />
          </button>
        </div>
        <div>
          <button className="buttons" onClick={() => setSmShow(true)}>
            MY PROFILE <img src={profileicon} className="cashiericon" />
          </button>

      
        </div>

        <div>
          <button className="buttons" onClick={() => setLgShow(true)}>
            CASHIER <img src={casier} className="cashiericon" />
          </button>

          <Modal
            // onHide={() => setLgShow(false)}
            //  onClick={() => setSmShow(false)}

            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={lgShow}
          >
            <Modal.Header id="CashierH">
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                  }}
                >
                  <button id="cashierbutn">CASHIER TRANSACTIONS</button>
                  <img src={Gold} />
                </div>
                <img
                  src={closeicon}
                  className="Cose"
                  onClick={() => {
                    setLgShow(false);
                  }}
                />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table responsive>
                <thead
                  style={{
                    background: "red",
                    color: "white",
                    borderBottom: "none",
                  }}
                >
                  <tr>
                    {[
                      "TXN",
                      "Date",
                      "Loft Name",
                      "Race Name",
                      "Function",
                      "debit",
                      "credit",
                      "beforeValue",
                      "afterValue",
                      "Win",
                      "Pay",
                    ].map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[11, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1].map((n) => (
                    <tr>
                      {Array.from({ length: 11 }).map((_, index) => (
                        <td
                          key={index}
                          style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                          Table cell {index}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Pagination size="sm">{items}</Pagination>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Link to="/how-to">
            {" "}
            <button className="buttons">
              HOW TO <img src={loft} style={{ width: "30px" }} />
            </button>
          </Link>
        </div>
        <div>
          <Link to="/statistics">
            <button className="buttons">
              MY STATISTICS{" "}
              <img
                src={statistics}
                style={{ width: "24px", marginLeft: "3px" }}
              />
            </button>
          </Link>
        </div>
      </div>
      <Modal
            // onHide={() => setSmShow(false)}
            //  onClick={() => setSmShow(false)}

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={smShow}
            // style={{width:"1000px"}}
          >
            <Modal.Header
              style={{ backgroundColor: "#003a96", height: "70px" }}
            >
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p id="presonalM">PERSONAL DETAILS</p>
                <img
                  src={closeicon}
                  className="Cose"
                  onClick={() => {
                    setSmShow(false);
                  }}
                />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                height: "auto",
                backgroundColor: "#003a96",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Container id="detailmain">
                <img src={log} id="log" />
                <form onSubmit={handleSubmit(update)}>
                  <Row>
                    <Col sm className="formcol">
                      <span className="inpttitle">Enter your Name*</span>
                      <br />
                      <input
                        type="text"
                        defaultValue={profile_info?.name}
                        {...register("name", { required: true })}
                        placeholder="Enter your Name"
                        className="inptsignup"
                      />
                      <br />
                      <span className="inpttitle">Email Address*</span>
                      <br />
                      <input
                        type="email"
                        defaultValue={profile_info?.email}
                        {...register("email", { required: true })}
                        placeholder="Enter Address"
                        className="inptsignup"
                      />
                      <br />
                      {/* <span className="inpttitle">Date of Birth*</span>
                      <br />
                      <input
                        type="date"
                       
                        placeholder="Enter Password"
                        className="inptsignup"
                      /> */}
                      {/* <br /> */}

                      <span className="inpttitle">Select your Country*</span>
                      <br />
                      <select  defaultValue={profile_info?.country} {...register("country")} className="inptsignup">
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option selected value="Algeria">
                          Algeria
                        </option>
                        <option value="Andorra">Andorra</option>
                      </select>
                      <br />
                      <span className="inpttitle">Select Your Outfit*</span>
                      <p style={{ display: "none" }}> {counter++}</p>
                    {}
                  <Select
                  defaultValue={countries.filter((item)=> item.value === profile_info?.outfit)[0]}
                    value={country}
                    onChange={(e) => setCountry(e)}
                    options={countries}
                  />
                    </Col>
                  
                  
                    <Col sm className="formcol">
                 
               
                      <span className="inpttitle">Enter a Loft Name*</span>
                      <br />
                      <input
                       {...register("loft_name", { required: true })}
                       defaultValue={profile_info?.loft_name}
                        type="text"
                        placeholder="Enter Password"
                        className="inptsignup"
                      />
                      <br />
                      <span className="inpttitle">Mobile Number*</span>
                      <br />
                      <input
                        type="number"
                        defaultValue={profile_info?.mobile}
                        {...register("mobile", { required: true })}
                        placeholder="Enter your Name"
                        className="inptsignup"
                      />
                      <br />
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="myfile"
                        name="myfile"
                      />
                      <label
                        htmlFor="myfile"
                        className="inptsignup"
                        style={{
                          marginTop: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        + Upload Profile Pic
                      </label>
                    </Col>
                  </Row>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <p id="lastupdettex">
                      Please read our Terms of Use and Privacy Policies <br />
                      <button type="submit" id="updatebutn">UPDATE PROFILE</button>
                    </p>
                  </div>
                </form>
              </Container>
            </Modal.Body>
            {/* <Modal.Footer>
                            <Button onClick={() => setSmShow(false)}>Close</Button>
                        </Modal.Footer> */}
          </Modal>
      <div className="mobShow">
        <div>
          <button className="buttons" id="loby">
            <img src={lobby} style={{ width: "40px" }} />
          </button>
        </div>
        <div>
          <button className="buttons" onClick={() => setSmShow(true)}>
            <img src={profileicon} className="cashiericon" />
          </button>

        
        </div>

        <div>
          <button className="buttons" onClick={() => setLgShow(true)}>
            <img src={casier} className="cashiericon" />
          </button>

          <Modal
            // onHide={() => setLgShow(false)}
            //  onClick={() => setSmShow(false)}

            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={lgShow}
          >
            <Modal.Header id="CashierH">
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                  }}
                >
                  <button id="cashierbutn">CASHIER TRANSACTIONS</button>
                  <img src={Gold} />
                </div>
                <img
                  src={closeicon}
                  className="Cose"
                  onClick={() => {
                    setLgShow(false);
                  }}
                />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table responsive>
                <thead
                  style={{
                    background: "red",
                    color: "white",
                    borderBottom: "none",
                  }}
                >
                  <tr>
                    {[
                      "TXN",
                      "Date",
                      "Loft Name",
                      "Race Name",
                      "Function",
                      "debit",
                      "credit",
                      "beforeValue",
                      "afterValue",
                      "Win",
                      "Pay",
                    ].map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[11, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1].map((n) => (
                    <tr>
                      {Array.from({ length: 11 }).map((_, index) => (
                        <td
                          key={index}
                          style={{ fontSize: "14px", fontWeight: "500" }}
                        >
                          Table cell {index}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Pagination size="sm">{items}</Pagination>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Link to="/how-to">
            {" "}
            <button className="buttons">
              <img src={loft} style={{ width: "30px" }} />
            </button>
          </Link>
        </div>
        <div>
          <Link to="/statistics">
            <button className="buttons">
              <img
                src={statistics}
                style={{ width: "24px", marginLeft: "3px" }}
              />
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
export default ButtonLine;
