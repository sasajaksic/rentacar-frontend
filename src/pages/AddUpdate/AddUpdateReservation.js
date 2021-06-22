import React, { useEffect, useState } from "react";
import ReservationForm from "../../components/Form/ReservationForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import ReservationService from "../../services/ReservationService";

const AddUpdateReservation = () => {
  const history = useHistory();
  const search = useLocation().search;
  const reservationId = new URLSearchParams(search).get("reservationId");
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    if (reservationId) {
      ReservationService.getById(reservationId)
        .then(setReservation)
        .catch(console.error);
    }
  }, [reservationId]);

  const receiveReservation = (reservation) => {
    if (reservationId) {
      ReservationService.updateReservation(reservationId, reservation).then(
        (data) => {
          history.push("/reservations");
        }
      );
    } else {
      ReservationService.createNewReservation(reservation).then((data) => {
        history.push("/reservations");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New reservation"}
              description={"Enter new reservation information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <ReservationForm
                  reservation={reservation}
                  sendReservation={receiveReservation}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateReservation;
