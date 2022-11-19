import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderBtns.css";
const HeaderBtns = (props) => {
  const aboutBtnHandler = () => {
    props.abtRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-about-menu-btn">
      <nav>
        <NavLink to="/home">
          <button className="header-btn">Home</button>
        </NavLink>
      </nav>
      <button className="header-btn">Menu</button>
      <button className="header-btn" onClick={aboutBtnHandler}>
        About
      </button>
    </div>
  );
};

export default HeaderBtns;
