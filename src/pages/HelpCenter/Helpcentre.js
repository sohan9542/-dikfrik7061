import React from "react"
import Navbar from "./../../Components/Navbar/index.js"
import Linebar from "./../../Components/Linebar/Linebar"
import Footer from "../../Components/Footer/footer.js"
import './HelpCenter.css'

function HelpCaentre (){
    return(
        <div>
        <div>
            <Navbar />
        </div>
        <div>
            <Linebar />
        </div>
        <div className="whitespace"></div>
        <div>
            <Footer />
        </div>
        </div>
    )
}
export default HelpCaentre