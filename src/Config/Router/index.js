import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from '../../pages/Home'
import HelpCentre from "./../../pages/HelpCenter/Helpcentre"
import Contact from "./../../pages/Contact/contact"
import Dashboard from "./../../pages/Dashboard/Dashbord"
import Race from "./../../pages/Race/Race"
import Howto from "../../pages/howto/Howto";
import Statistics from "../../pages/statistics/Statistics";

let Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/HelpCenter" element={< HelpCentre/>} />
                <Route path="/statistics" element={< Statistics/>} />
                <Route path="/how-to" element={< Howto/>} />
                <Route path="/Contact" element={< Contact />} />
                <Route path="/Dashboard" element={< Dashboard />} />
                <Route path="/Race" element={< Race />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router