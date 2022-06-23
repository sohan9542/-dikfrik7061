import React from "react";
import Navbar from "../../Components/Navbar/index.js";
import Linebar from "../../Components/Linebar/Linebar";
import Footer from "../../Components/Footer/footer.js";

function Statistics() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Linebar />
      </div>
      <div style={{ width: "100%", height: "480px" }}></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Statistics;
