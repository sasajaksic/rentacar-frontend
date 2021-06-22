import React, { useEffect, useState } from "react";

const AppuserForm = ({ appuser, sendAppuser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [driverLicence, setDriverLicence] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [role, setRole] = useState("");

  const [formErrors, setFormErrors] = useState({
    email: null,
    username: null,
    password: null,
    firstName: null,
    lastName: null,
    phone: null,
    adress: null,
    driverLicence: null,
    cardNumber: null,
  });

  useEffect(() => {
    setEmail(appuser ? appuser.email : "");
    setUsername(appuser ? appuser.username : "");
    setPassword(appuser ? appuser.password : "");
    setFirstName(appuser ? appuser.firstName : "");
    setLastName(appuser ? appuser.lastName : "");
    setPhone(appuser ? appuser.phone : "");
    setAdress(appuser ? appuser.adress : "");
    setDriverLicence(appuser ? appuser.driverLicence : "");
    setCardNumber(appuser ? appuser.cardNumber : "");
    setRole(appuser ? appuser.role : "");
  }, [appuser]);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      email: null,
      username: null,
      password: null,
      firstName: null,
      lastName: null,
      phone: null,
      adress: null,
      driverLicence: null,
      cardNumber: null,
    };

    if (email === "") {
      tmpFormErrors.email = " You must enter appuser email!";
      formValid = false;
    }

    if (username === "") {
      tmpFormErrors.username = " You must enter appuser username!";
      formValid = false;
    }

    if (password === "") {
      tmpFormErrors.password = " You must enter appuser password!";
      formValid = false;
    }

    if (firstName === "") {
      tmpFormErrors.firstName = " You must enter appuser first name!";
      formValid = false;
    }

    if (lastName === "") {
      tmpFormErrors.lastName = " You must enter appuser last name!";
      formValid = false;
    }

    if (phone === "") {
      tmpFormErrors.phone = " You must enter appuser phone!";
      formValid = false;
    }

    if (adress === "") {
      tmpFormErrors.adress = " You must enter appuser adress!";
      formValid = false;
    }

    if (driverLicence === "") {
      tmpFormErrors.driverLicence = " You must enter appuser driver licence!";
      formValid = false;
    }

    if (cardNumber === "") {
      tmpFormErrors.cardNumber = " You must enter appuser card number!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewAppuser = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let appuserObj = {
      email: email,
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      adress: adress,
      driverLicence: driverLicence,
      cardNumber: cardNumber,
      role: 0,
    };

    sendAppuser(appuserObj);
    console.log(appuserObj);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">
          Email{" "}
          {formErrors.email ? (
            <span style={{ color: "red" }}>{formErrors.email}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control item"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">
          Username{" "}
          {formErrors.username ? (
            <span style={{ color: "red" }}>{formErrors.username}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control item"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password{" "}
          {formErrors.password ? (
            <span style={{ color: "red" }}>{formErrors.password}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="first-name">
          First Name{" "}
          {formErrors.firstName ? (
            <span style={{ color: "red" }}>{formErrors.firstName}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          className="form-control item"
          id="first-name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">
          Last Name{" "}
          {formErrors.lastName ? (
            <span style={{ color: "red" }}>{formErrors.lastName}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          className="form-control item"
          id="last-name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">
          Phone{" "}
          {formErrors.phone ? (
            <span style={{ color: "red" }}>{formErrors.phone}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          className="form-control item"
          id="phone"
        />
      </div>
      <div className="form-group">
        <label htmlFor="adress">
          Adress{" "}
          {formErrors.adress ? (
            <span style={{ color: "red" }}>{formErrors.adress}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          type="text"
          className="form-control item"
          id="adress"
        />
      </div>
      <div className="form-group">
        <label htmlFor="driver-licence">
          Driver Licence{" "}
          {formErrors.driverLicence ? (
            <span style={{ color: "red" }}>{formErrors.driverLicence}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={role === 1 ? "none" : driverLicence}
          onChange={(e) => setDriverLicence(e.target.value)}
          type="text"
          className="form-control item"
          id="driver-licence"
        />
      </div>
      <div className="form-group">
        <label htmlFor="card-number">
          Card Number{" "}
          {formErrors.cardNumber ? (
            <span style={{ color: "red" }}>{formErrors.cardNumber}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={role === 1 ? "none" : cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          type="text"
          className="form-control item"
          id="card-number"
        />
      </div>

      <button
        onClick={saveNewAppuser}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Appuser
      </button>
    </form>
  );
};

export default AppuserForm;
