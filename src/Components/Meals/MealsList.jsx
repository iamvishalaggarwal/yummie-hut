import React, { useContext } from "react";
import "./MealsList.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../Context/CartContext";

const MealsList = (props) => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx)
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meals-list">
      <div>
        <h3 className="meals-name">{props.name}</h3>
        <div className="meals-desc">{props.desc}</div>
        <div className="meals-price">₹{props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealsList;
