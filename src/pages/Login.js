import LoginForm from "../components/Form/LoginForm";
import Heading from "../components/Heading/Heading";
import { useHistory } from "react-router-dom";
import AppuserService from "../services/AppuserService";

const Login = () => {
  const history = useHistory();

  const receiveAppuser = (appuser) => {
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
          <Heading title={"Login"} description={"Here you can login!"} />
          <LoginForm sendAppuser={receiveAppuser} />
        </div>
      </section>
    </main>
  );
};

export default Login;
