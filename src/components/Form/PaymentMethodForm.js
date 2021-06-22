import React, { useEffect, useState } from "react";

const PaymentMethodForm = ({ paymentMethod, sendPaymentMethod }) => {
  const [method, setMethod] = useState("");
  const [description, setDescrtiption] = useState("");

  const [formErrors, setFormErrors] = useState({
    method: null,
    description: null,
  });

  useEffect(() => {
    setMethod(paymentMethod ? paymentMethod.method : "");
    setDescrtiption(paymentMethod ? paymentMethod.description : "");
  }, [paymentMethod]);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      method: null,
      description: null,
    };

    if (method === "") {
      tmpFormErrors.method = " You must enter payment method!";
      formValid = false;
    }

    if (description === "") {
      tmpFormErrors.description = " You must enter payment method description!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewPaymentMethod = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let paymentMethodObj = {
      method: method,
      description: description,
    };

    sendPaymentMethod(paymentMethodObj);
    console.log(paymentMethodObj);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="method">
          Method{" "}
          {formErrors.method ? (
            <span style={{ color: "red" }}>{formErrors.method}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          method="text"
          className="form-control item"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">
          Description{" "}
          {formErrors.description ? (
            <span style={{ color: "red" }}>{formErrors.description}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={description}
          onChange={(e) => setDescrtiption(e.target.value)}
          method="text"
          className="form-control item"
          id="description"
        />
      </div>

      <button
        onClick={saveNewPaymentMethod}
        className="btn btn-primary btn-block"
        method="submit"
      >
        Save Payment Method
      </button>
    </form>
  );
};

export default PaymentMethodForm;
