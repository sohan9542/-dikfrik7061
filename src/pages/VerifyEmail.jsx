import React, { useState, useEffect } from "react";

import Navbar from "./../Components/Navbar/index";
// import Linbar from "./../../Components/Linebar/Linebar"
import Linbar from "./../Components/Linebar/Linebar";
import axios from "axios";
import { URI } from "../App";
import { useNavigate, useParams } from "react-router-dom";
const VerifyEmail = () => {
  const { verify_id } = useParams();
  const [isVerified, setIsVerified] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios.post(`${URI}verify-email/${verify_id}`).then((res) => {
      if (res?.data?.status === 200) {
        setIsVerified(true);
        setMessage(res?.data?.message);
      } else {
        setMessage(res?.data?.message);
        setIsVerified(false);
      }
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Linbar />
      </div>

      <div>
        {isVerified !== null && (
          <div
            style={{
              paddingTop: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1
                style={{
                  color: "#003A96",
                }}
              >
                {message}
              </h1>
              <button
                onClick={() => navigate("/")}
                style={{ marginLeft: "0" }}
                type="submit"
                className="lastsignbutn"
              >
                Back to home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
