import React from "react"
import Navbar from "./../../Components/Navbar/index"
import Linebar from "./../../Components/Linebar/Linebar"
import Section2 from "./../../Components/Section2/section2"
import Vsection from "./../../Components/VideoSection/Vsection"
import Full from "./../../Components/FullSlider/full"
import SecWeb from "../../Components/SectionWeb/secweb"
import Footer from "./../../Components/Footer/footer"
import { Container } from "react-bootstrap"
function Race() {
    return (
        <div>
            <div><Navbar /></div>
            <Linebar />
            <br />
            <br />
            <br />
            <br />
            <div>
                <Section2 />
            </div>


            <div>
                <Vsection />
            </div>
            <div>
                <Container>
                <Full />
                </Container>
            </div>
            <br />
            <div>
                <SecWeb />
                <div>
                    <br/>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Race