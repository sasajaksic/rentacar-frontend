import React, { useEffect, useState } from "react";

const FineForm = ({ fine, sendFine }) => {
  const [type, setType] = useState("");
  const [description, setDescrtiption] = useState("");
  const [price, setPrice] = useState("");

  const [formErrors, setFormErrors] = useState({
    type: null,
    description: null,
    price: null,
  });

  useEffect(() => {
    setType(fine ? fine.type : "");
    setDescrtiption(fine ? fine.description : "");
    setPrice(fine ? fine.price : "");
  }, [fine]);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      type: null,
      description: null,
      price: null,
    };

    if (type === "") {
      tmpFormErrors.type = " You must enter fine type!";
      formValid = false;
    }

    if (description === "") {
      tmpFormErrors.description = " You must enter fine description!";
      formValid = false;
    }

    if (price === "") {
      tmpFormErrors.price = " You must enter fine price!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewFine = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let fineObj = {
      type: type,
      description: description,
      price: price,
    };

    sendFine(fineObj);
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
        onClick={saveNewFine}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Fine
      </button>
    </form>
  );
};

export default FineForm;
