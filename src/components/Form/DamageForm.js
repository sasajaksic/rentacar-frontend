import React, { useEffect, useState } from "react";

const DamageForm = ({ damage, sendDamage }) => {
  const [type, setType] = useState("");
  const [description, setDescrtiption] = useState("");
  const [price, setPrice] = useState("");

  const [formErrors, setFormErrors] = useState({
    type: null,
    description: null,
    price: null,
  });

  useEffect(() => {
    setType(damage ? damage.type : "");
    setDescrtiption(damage ? damage.description : "");
    setPrice(damage ? damage.price : "");
  }, [damage]);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      type: null,
      description: null,
      price: null,
    };

    if (type === "") {
      tmpFormErrors.type = " You must enter damage type!";
      formValid = false;
    }

    if (description === "") {
      tmpFormErrors.description = " You must enter damage description!";
      formValid = false;
    }

    if (price === "") {
      tmpFormErrors.price = " You must enter damage price!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewDamage = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let damageObj = {
      type: type,
      description: description,
      price: price,
    };

    sendDamage(damageObj);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="type">
          Type{" "}
          {formErrors.type ? (
            <span style={{ color: "red" }}>{formErrors.type}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          type="text"
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
          type="text"
          className="form-control item"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">
          Price:
          {formErrors.price ? (
            <span style={{ color: "red" }}>{formErrors.price}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          className="form-control"
          id="price"
        />
      </div>
      <button
        onClick={saveNewDamage}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Damage
      </button>
    </form>
  );
};

export default DamageForm;
