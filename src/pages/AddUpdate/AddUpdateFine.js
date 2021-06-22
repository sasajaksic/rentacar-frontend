import React, { useEffect, useState } from "react";
import FineForm from "../../components/Form/FineForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import FineService from "../../services/FineService";

const AddUpdateLocation = () => {
  const history = useHistory();
  const search = useLocation().search;
  const fineId = new URLSearchParams(search).get("fineId");
  const [fine, setFine] = useState(null);

  useEffect(() => {
    if (fineId) {
      FineService.getById(fineId).then(setFine).catch(console.error);
    }
  }, [fineId]);

  const recieveFine = (fine) => {
    if (fineId) {
      FineService.updateFine(fineId, fine).then((data) => {
        history.push("/fines");
      });
    } else {
      FineService.createNewFine(fine).then((data) => {
        history.push("/fines");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New fine"}
              description={"Enter new fine information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <FineForm fine={fine} sendFine={recieveFine} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateLocation;
