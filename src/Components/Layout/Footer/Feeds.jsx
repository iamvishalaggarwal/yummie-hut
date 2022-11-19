import React from "react";
import "./feeds.css";
import pic1 from "../../../Assests/pic1.jpg";
import pic2 from "../../../Assests/pic2.jpg";
import pic3 from "../../../Assests/pic3.jpg";
import pic4 from "../../../Assests/pic4.jpg";
import pic5 from "../../../Assests/pic5.jpg";
import pic6 from "../../../Assests/pic6.jpg";
const Feeds = () => {
  return (
    <div className="feeds">
      <div className="col-xl-6 col-lg-2 col-md-6 col-sm-6">
        <div className="container">
          <h3 className="feeds-title">Our Feeds</h3>
          <div>
            <ul className="feeds-gallery" type="none">
              <li>
                <img src={pic1} alt="" />
              </li>
              <li>
                <img src={pic2} alt="" />
              </li>
              <li>
                <img src={pic3} alt="" />
              </li>
              <li>
                <img src={pic4} alt="" />
              </li>
              <li>
                <img src={pic5} alt="" />
              </li>
              <li>
                <img src={pic6} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
