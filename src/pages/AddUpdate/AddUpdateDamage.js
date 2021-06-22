import React, { useEffect, useState } from "react";
import DamageForm from "../../components/Form/DamageForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import DamageService from "../../services/DamageService";

const AddUpdateLocation = () => {
  const history = useHistory();
  const search = useLocation().search;
  const damageId = new URLSearchParams(search).get("damageId");
  const [damage, setDamage] = useState(null);

  useEffect(() => {
    if (damageId) {
      DamageService.getById(damageId).then(setDamage).catch(console.error);
    }
  }, [damageId]);

  const recieveDamage = (damage) => {
    if (damageId) {
      DamageService.updateDamage(damageId, damage).then((data) => {
        history.push("/damages");
      });
    } else {
      DamageService.createNewDamage(damage).then((data) => {
        history.push("/damages");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New damage"}
              description={"Enter new damage information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <DamageForm damage={damage} sendDamage={recieveDamage} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateLocation;
