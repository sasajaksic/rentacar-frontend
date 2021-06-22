import React, { useEffect, useState } from "react";

const LoginForm = ({ sendAppuser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({
    email: null,
    password: null,
  });

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      email: null,
      password: null,
    };
    if (email === "") {
      tmpFormErrors.email = " You must enter appuser email!";
      formValid = false;
    }
    if (password === "") {
      tmpFormErrors.password = " You must enter appuser password!";
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
      password: password,
    };

    sendAppuser(appuserObj);
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

      <button
        onClick={saveNewAppuser}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
