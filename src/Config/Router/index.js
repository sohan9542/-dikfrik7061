import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import HelpCentre from "./../../pages/HelpCenter/Helpcentre";
import Contact from "./../../pages/Contact/contact";
import Dashboard from "./../../pages/Dashboard/Dashbord";
import Race from "./../../pages/Race/Race";
import Howto from "../../pages/howto/Howto";
import Statistics from "../../pages/statistics/Statistics";
import Term from "../../pages/footerpage/Term";
import Privacy from "../../pages/footerpage/Privecy";
import { ToastContainer } from "react-toastify";
import VerifyEmail from "../../pages/VerifyEmail";
import ResetPass from "../../pages/Resetpass";

export const MainContent = createContext();
let Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authModal, setAuthModal] = useState(false);
  const [modaltype, setmodaltype] = useState("login1");

  useEffect(() => {
    if (localStorage.getItem("user_pegion")) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <MainContent.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        authModal,
        setAuthModal,
        modaltype,
        setmodaltype,
      }}
    >
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HelpCenter" element={<HelpCentre />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/how-to" element={<Howto />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/verify-email/:verify_id" element={<VerifyEmail />} />
          <Route path="/reset-password/:verify_id" element={<ResetPass />} />
          <Route path="/Race" element={<Race />} />
          <Route path="/terms-and-conditions" element={<Term />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </MainContent.Provider>
  );
};
export default Router;
