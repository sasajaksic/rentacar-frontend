import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import VehicleService from "../services/VehicleService";
import Heading from "../components/Heading/Heading";
import NewReservationForm from "../components/Form/NewReservationForm";
import ReservationService from "../services/ReservationService";

const NewReservation = () => {
  const history = useHistory();
  const search = useLocation().search;
  const reservationId = new URLSearchParams(search).get("reservationId");
  const [reservation, setReservation] = useState(null);

  const [vehicle, setVehicle] = useState({});

  let { vehicleId } = useParams();

  useEffect(() => {
    VehicleService.getById(vehicleId)
      .then((data) => {
        setVehicle(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [vehicleId]);

  useEffect(() => {
    if (reservationId) {
      ReservationService.getById(reservationId)
        .then(setReservation)
        .catch(console.error);
    }
  }, [reservationId]);

  const receiveReservation = (reservation) => {
    if (reservation) {
      ReservationService.createNewReservation(reservation).then((data) => {
        history.push("/reservations");
      });
    }
  };

  return (
    <main className="page product-page">
      <section className="clean-block clean-product dark">
        <div className="container">
          <Heading
            title={"New reservation"}
            description={
              "Enter details to resetve: " + vehicle.brand + " " + vehicle.model
            }
          />

          <div className="block-content">
            <div className="product-info">
              <NewReservationForm
                vehicle={vehicle}
                reservation={reservation}
                sendReservation={receiveReservation}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewReservation;
