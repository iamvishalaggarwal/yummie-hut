import React from "react";
import { Link } from "react-router-dom";
import "./HomeBtn.css";
const HomeBtn = () => {
  return (
    <div>
      <nav>
        <Link to="/welcome">
          <button className="menuBtn">Meals</button>
        </Link>
      </nav>
    </div>
  );
};

export default HomeBtn;
