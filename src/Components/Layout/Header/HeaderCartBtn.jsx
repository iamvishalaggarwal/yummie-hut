import React, { useEffect, useState } from "react";
import HeaderCartIcon from "./HeaderCartIcon";
import "./HeaderCartBtn.css";
import { useContext } from "react";
import CartContext from "../../Context/CartContext";

const HeaderCartBtn = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx)

  // Here, we use reduce bcoz it transforms the array into a single number in this case
  // we can't use length method bcoz some items are more than 1 e.g: Sushi x 2
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  // we are adding bump animation on cart btn on adding item in cart
  const btnClassName = btnIsHighlighted
    ? "header-btn-cart bump"
    : "header-btn-cart";

  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setBtnIsHighlighted(true);
    }
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClassName} onClick={props.onCart}>
      {/* svg element taken by bootstrapIcons */}
      <div className="cart-hover">
        <HeaderCartIcon />
      </div>
      <div className="cart-badge">{numberOfCartItems}</div>
    </button>
  );
};

export default HeaderCartBtn;
