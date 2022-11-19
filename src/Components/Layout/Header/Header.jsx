import React from "react";
import "./Header.css";
import HeaderCartBtn from "./HeaderCartBtn";
import HeaderBtns from "./HeaderBtns";
import mealsImage from "../../../Assests/headerPic.png";
import yummmieHutLogo from "../../../Assests/logo.png";
const Header = (props) => {
  return (
    <>
      <div className="navbar-collapse main-menu-item justify-content-end expand">
        <header className="header-text">
          <img src={yummmieHutLogo} alt="" className="header-logo" />
            <HeaderBtns abtRef={props.abtRef} />
          <HeaderCartBtn onCart={props.onShowCart} />
        </header>
      </div>

      {/* Header Image */}
      <div className="header-image">
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
export default Header;
