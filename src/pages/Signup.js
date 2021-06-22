import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AppuserForm from "../components/Form/AppuserForm";
import Heading from "../components/Heading/Heading";
import AppuserService from "../services/AppuserService";

const Signup = () => {
  const history = useHistory();
  const [appuser, setAppuser] = useState(null);

  const receiveAppuser = (appuser) => {
    AppuserService.createNewAppuser(appuser).then((data) => {
      userLogin(data);
    });
  };

  const userLogin = (appuser) => {
    AppuserService.login(appuser.email, appuser.password).then((data) => {
      localStorage.setItem("appuser", JSON.stringify(data));

      console.log(data);
      history.push("");
    });
  };

  return (
    <main className="page login-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <Heading title={"Sign in"} description={"Here you can sign in!"} />
          <AppuserForm appuser={appuser} sendAppuser={receiveAppuser} />
        </div>
      </section>
    </main>
  );
};

export default Signup;
