import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "./../Components/Navbar/index";
// import Linbar from "./../../Components/Linebar/Linebar"
import Linbar from "./../Components/Linebar/Linebar";
import axios from "axios";
import { URI } from "../App";
import { useNavigate, useParams } from "react-router-dom";
const ResetPass = () => {
  const { verify_id } = useParams();

  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
const navigate = useNavigate()
  const resetPass = () => {
    let body = {
      email: localStorage.getItem("forgetEmail"),
      token: verify_id,
      password: pass,
      password_confirmation: confirmPass
    };
    if (pass === confirmPass) {
      axios.post(`${URI}reset-password`, body).then((res) => {
        if (res?.data?.status === 200) {
          toast.success(res?.data?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            navigate("/")
          }, 3000);
        } else {
          toast.error(res?.data?.response?.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    } else {
      toast.error("Password not matching", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Linbar />
      </div>

      <div>
        <div
          style={{
            height: "100vh",
            paddingTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="signupmain"
          id="signinbtn"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              resetPass();
            }}
            style={{
              display: "flex",

              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <span className="inputtitle">Enter Password*</span>
            <input
            required
            onChange={(e)=>setPass(e.target.value)}
              type="password"
              placeholder="Enter New Password"
              className="inputsignup"
            />
            <span className="inputtitle">Confirm Password*</span>
            <input
            required
              type="password"
              onChange={(e)=>setConfirmPass(e.target.value)}
              placeholder="Confirm New Password"
              className="inputsignup"
            />

            <div className="lastpricy">
              <p className="lasttex">
                Please read our Terms of Use and Privacy Policies
              </p>
              <button type="submit" className="lastsignbutn">SUBMIT </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
