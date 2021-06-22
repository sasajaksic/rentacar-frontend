import React, { useEffect, useState } from "react";
import RentForm from "../../components/Form/RentForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import RentService from "../../services/RentService";

const AddUpdateRent = () => {
  const history = useHistory();
  const search = useLocation().search;
  const rentId = new URLSearchParams(search).get("rentId");
  const [rent, setRent] = useState(null);

  useEffect(() => {
    if (rentId) {
      RentService.getById(rentId).then(setRent).catch(console.error);
    }
  }, [rentId]);

  const receiveRent = (rent) => {
    if (rentId) {
      RentService.updateRent(rentId, rent).then((data) => {
        history.push("/rents");
      });
    } else {
      RentService.createNewRent(rent).then((data) => {
        history.push("/rents");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New rent"}
              description={"Enter new rent information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <RentForm rent={rent} sendRent={receiveRent} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateRent;
