import { useRef, useState } from "react";

import classes from "./CheckoutOrder.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 6;

const CheckoutOrder = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
    email: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const emailInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredEmailIsValid = !isEmpty(enteredEmail);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
      email: enteredEmailIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredEmailIsValid;

    if (!formIsValid) {
      return;
    }
    //submit data to cart
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
      email: enteredEmail,
    });
  };

  const nameControlClasses = `${classes.control} ${"form-floating"} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${"form-floating"} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${"form-floating"} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${"form-floating"} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  const emailControlClasses = `${classes.control} ${"form-floating"} ${
    formInputsValidity.email ? "" : classes.invalid
  }`;

  return (
    <>
      <p>
        DELIVERY DETAILS
      </p>
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.personalDetails}>
        {/* NAME PART */}
        <div className={nameControlClasses}>
          <input
            type="text"
            id={classes['floatingName']}
            ref={nameInputRef}
            placeholder="Name"
            className="form-control"
          />
          <label htmlFor="name">Your Name</label>
          {!formInputsValidity.name && <p>Please enter a valid name!</p>}
        </div>

        {/* EMAIL PART */}
        <div className={emailControlClasses}>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            placeholder="abc@gmail.com"
            className="form-control"
          />
          <label htmlFor="email">Email Address</label>
          {!formInputsValidity.email && <p>Please enter a valid Email!</p>}
        </div>
        </div>

        <div className={streetControlClasses}>
          <input
            type="text"
            id="street"
            ref={streetInputRef}
            placeholder="StreetAddress"
            className="form-control"
          />
          <label htmlFor="street">Street</label>
          {!formInputsValidity.street && <p>Please enter a valid street!</p>}
        </div>

        <div className={postalCodeControlClasses}>
          <input
            type="text"
            id="pinCode"
            ref={postalCodeInputRef}
            placeholder="Postal Code"
            className="form-control"
          />
          <label htmlFor="postal">Pin Code</label>
          {!formInputsValidity.postalCode && (
            <p>Please enter a valid pin code (6 characters long)!</p>
          )}
        </div>

        <div className={cityControlClasses}>
          <input
            type="text"
            id="city"
            ref={cityInputRef}
            placeholder="City Name"
            className="form-control"
          />
          <label htmlFor="city">City</label>
          {!formInputsValidity.city && <p>Please enter a valid city!</p>}
        </div>

        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Back
          </button>
          <button className={classes.submit}>Confirm →</button>
        </div>
      </form>
    </>
  );
};

export default CheckoutOrder;
