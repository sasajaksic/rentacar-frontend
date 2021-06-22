import React, { useEffect, useState } from "react";
import VehicleForm from "../../components/Form/VehicleForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import VehicleService from "../../services/VehicleService";

const AddUpdateVehicle = () => {
  const history = useHistory();
  const search = useLocation().search;
  const vehicleId = new URLSearchParams(search).get("vehicleId");
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    if (vehicleId) {
      VehicleService.getById(vehicleId).then(setVehicle).catch(console.error);
    }
  }, [vehicleId]);

  const receiveVehicle = (vehicle) => {
    if (vehicleId) {
      VehicleService.updateVehicle(vehicleId, vehicle).then((data) => {
        history.push("/vehicles");
      });
    } else {
      VehicleService.createNewVehicle(vehicle).then((data) => {
        history.push("/vehicles");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New vehicle"}
              description={"Enter new vehicle information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <VehicleForm vehicle={vehicle} sendVehicle={receiveVehicle} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateVehicle;
