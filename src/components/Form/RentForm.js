import React, { useEffect, useState } from "react";
import ReservationService from "../../services/ReservationService";
import PaymentMethodService from "../../services/PaymentMethodService";

const RentForm = ({ rent, sendRent }) => {
  const [date, setDate] = useState("");
  const [deposit, setDeposit] = useState("");
  const [price, setPrice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [reservation, setReservation] = useState("");

  const [allReservations, setAllReservations] = useState([]);
  const [allPaymentMethods, setAllPaymentMethods] = useState([]);

  useEffect(() => {
    ReservationService.getAll()
      .then((data) => {
        setAllReservations(data);
      })
      .catch((error) => {
        console.error(error);
      });
    PaymentMethodService.getAll()
      .then((data) => {
        setAllPaymentMethods(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [formErrors, setFormErrors] = useState({
    date: null,
    deposit: null,
    price: null,
    paymentMethod: null,
    reservation: null,
  });

  useEffect(() => {
    setDate(rent ? rent.date : "");
    setDeposit(rent ? rent.deposit : "");
    setPrice(rent ? rent.price : "");
    setPaymentMethod(rent ? rent.paymentMethod.id : "");
    setReservation(rent ? rent.reservation.id : "");
  }, [rent]);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      date: null,
      deposit: null,
      price: null,
      paymentMethod: null,
      reservation: null,
    };

    if (date === "") {
      tmpFormErrors.date = " You must enter rent date!";
      formValid = false;
    }

    if (deposit === "") {
      tmpFormErrors.deposit = " You must enter rent deposit!";
      formValid = false;
    }

    if (price === "") {
      tmpFormErrors.price = " You must enter rent price!";
      formValid = false;
    }

    if (paymentMethod === "") {
      tmpFormErrors.paymentMethod = " You must enter rent payment method!";
      formValid = false;
    }

    if (reservation === "") {
      tmpFormErrors.reservation = " You must enter rent reservation!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewRent = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let rentObj = {
      date: date,
      deposit: deposit,
      price: price,
      paymentMethod: paymentMethod,
      reservation: reservation,
    };

    sendRent(rentObj);
    console.log(rentObj);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="return-date">
          Date{" "}
          {formErrors.date ? (
            <span style={{ color: "red" }}>{formErrors.date}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
          type="date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">
          Deposit:
          {formErrors.deposit ? (
            <span style={{ color: "red" }}>{formErrors.deposit}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          type="number"
          className="form-control"
          id="price"
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
      <div className="form-group">
        <label htmlFor="fuel">
          Payment method:
          {formErrors.paymentMethod ? (
            <span style={{ color: "red" }}>{formErrors.paymentMethod}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select reservation payment method:{" "}
          </option>
          {allPaymentMethods.map((paymentMethod, index) => (
            <option key={index} value={paymentMethod.id}>
              {paymentMethod.method}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="door-number">
          Reservation:
          {formErrors.reservation ? (
            <span style={{ color: "red" }}>{formErrors.reservation}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={reservation}
          onChange={(e) => setReservation(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select rent reservation:{" "}
          </option>
          {allReservations.map((reservation, index) => (
            <option key={index} value={reservation.id}>
              {reservation.vehicle.brand +
                " " +
                reservation.vehicle.model +
                " - " +
                reservation.client.firstName +
                " " +
                reservation.client.lastName}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={saveNewRent}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Rent
      </button>
    </form>
  );
};

export default RentForm;
