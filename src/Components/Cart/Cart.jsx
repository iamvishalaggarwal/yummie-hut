import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Context/CartContext";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import CheckoutOrder from "./CheckoutOrder";
const Cart = (props) => {
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx)
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartHasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartHasItems && <p className={classes.bill}>BILL DETAILS</p>}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          // becoz we want to bind id of the particular item
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const [isOrder, setIsOrder] = useState(false);
  const orderHandler = () => {
    setIsOrder(true);
    setIsCheckoutActive(true);
  };
  const closeAndCheckoutBnts = (
    <div className={classes.actions}>
      <button className={classes["button--close"]} onClick={props.onHideCart}>
        Back
      </button>
      {cartHasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Checkout →
        </button>
      )}
    </div>
  );
  //sending data to firebase database in OrderHistory file
  const orderDataHandler = async (userData) => {
    setisSubmitting(true);
    await fetch(
      "https://yummie-hut-default-rtdb.firebaseio.com/OrderHistory.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    setisSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const [isCheckoutActive, setIsCheckoutActive] = useState(false);
  const cartModalContent = (
    <>
      {!isCheckoutActive && cartItems}
      {!cartHasItems && <h3>Your cart is empty ☹</h3>}
      {cartHasItems && (
        <div className={classes.total}>
          <span>TO PAY</span>
          <span>₹{cartCtx.totalAmount.toFixed(2)}</span>
        </div>
      )}
      {isOrder && (
        <CheckoutOrder
          onConfirm={orderDataHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isOrder && closeAndCheckoutBnts}
    </>
  );
  const isSubmittingModalContent = <h5>Preparing Order 😉</h5>;
  const didSubmitModalContent = (
    <>
      <h4>Order will be arrived in few minutes 🥳🤟 </h4>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onHideCart}>
          Back
        </button>
      </div>
    </>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
