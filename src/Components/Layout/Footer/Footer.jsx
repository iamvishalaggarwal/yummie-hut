import React from "react";
import About from "./About";
import Feeds from "./Feeds";
import "./Footer.css";
// import footerPic from "../../../Assests/footerPic.png";
const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer-row">
        {/* <div className="footerImg">
          <img src={footerPic} alt="" />
        </div> */}
        <About />
        <Feeds />
      </div>
    </div>
  );
};

export default Footer;
