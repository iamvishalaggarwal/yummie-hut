import React from "react";
import MealsData from "./MealsData";
import MealsIntro from "./MealsIntro";
const Meals = (props) => {
  return (
    <div>
      <MealsIntro />
      <MealsData onMenuShowStatus={props.onMenuShowStatus} />
    </div>
  );
};

export default Meals;
