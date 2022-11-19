import React, { useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import {
  Header,
  Footer,
  Cart,
  Meals,
  CartProvider,
  HomePage,
} from "./Components/Helper";

const App = () => {
  const abtRef = useRef(null);
  const [isCartActive, setIsCartActive] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const cartShownHandler = () => {
    setIsCartActive(true);
  };
  const cartHideHandler = () => {
    setIsCartActive(false);
  };
  const menuShowStatusHandler = () => {
    setIsMenuShow(true);
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/welcome">
          <CartProvider>
            {isCartActive && <Cart onHideCart={cartHideHandler} />}
            <Header onShowCart={cartShownHandler} abtRef={abtRef} />
            <Meals onMenuShowStatus={menuShowStatusHandler} />
          </CartProvider>
          {isMenuShow && (
            <div ref={abtRef}>
              <Footer />
            </div>
          )}
        </Route>
      </Switch>
    </div>
  );
};
export default App;
