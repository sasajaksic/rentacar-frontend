import React, { useEffect, useState } from "react";
import AppuserForm from "../../components/Form/AppuserForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import AppuserService from "../../services/AppuserService";

const AddUpdateAppuser = () => {
  const history = useHistory();
  const search = useLocation().search;
  const appuserId = new URLSearchParams(search).get("appuserId");
  const [appuser, setAppuser] = useState(null);

  useEffect(() => {
    if (appuserId) {
      AppuserService.getById(appuserId).then(setAppuser).catch(console.error);
    }
  }, [appuserId]);

  const receiveAppuser = (appuser) => {
    if (appuserId) {
      AppuserService.updateAppuser(appuserId, appuser).then((data) => {
        history.push("/appusers");
      });
    } else {
      AppuserService.createNewAppuser(appuser).then((data) => {
        history.push("/appusers");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New appuser"}
              description={"Enter new appuser information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <AppuserForm appuser={appuser} sendAppuser={receiveAppuser} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateAppuser;
