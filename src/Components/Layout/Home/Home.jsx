import React from "react";
import homeLogo from "../../../Assests/homeLogo.png";
import "./Home.css";
import HomeBtn from "./HomeBtn";
const Home = () => {
  return (
    <>
      <header className="home-header">
        <img src={homeLogo} alt="" className="home-logo" />
      </header>
      <div className="home-text">
        <p className="text1">Welcome!</p>
        <div className="welcome-content">
          <p className="text2">Are you ready to pick up your food?</p>
          <p className="text3">
            Simply choose a comfortable time and enjoy your favourite meals.
          </p>
        </div>
        <HomeBtn />
      </div>
      <div className="homepage-img"></div>
    </>
  );
};

export default Home;
