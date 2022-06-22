import React from "react";
import Navbar from "./../../Components/Navbar/index"
import Linebar from "./../../Components/Linebar/Linebar"
import SectionDiv from "./../../Components/SectionDiv/SectionDiv"
import Sectiond from "./../../Components/DashbordSection1/Dashbordsection"
import ButtonLine from "../../Components/ButtonLine/buttonline";
import Largeslider from "./../../Components/Largeslider/largeslider"
import Footer from "./../../Components/Footer/footer"
import { Container } from "react-bootstrap";
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
            <div>
                {/* <Container> */}

                <Largeslider />
                {/* </Container> */}
            </div>
        <br/>
            <div>
                <SectionDiv />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
           
            <div>
                <Footer />
            </div>

        </div>
    )
}
export default Dashboard