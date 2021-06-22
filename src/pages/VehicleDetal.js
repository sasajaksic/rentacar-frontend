import React, { useState, useEffect } from "react";
import Heading from "../components/Heading/Heading";
import { useParams } from "react-router";
import VehicleService from "../services/VehicleService";
import { useHistory } from "react-router-dom";
import LoggedUserService from "../services/LoggedUserService";

const VehicleDetal = () => {
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

  const renderImage = (vehicle) => {
    if (vehicle.image) {
      // eslint-disable-next-line jsx-a11y/alt-text
      return <img className="img-fluid d-block mx-auto" src={vehicle.image} />;
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          className="img-fluid d-block mx-auto"
          src="https://restorankomuna.rs/wp-content/uploads/2020/10/nocontentyet.jpg"
        />
      );
    }
  };

  const history = useHistory();

  const openNewReservationPage = () => {
    history.push("/newReservation/" + vehicle.id);
  };

  const openSignupPage = () => {
    history.push("/signup");
  };

  const renderGuest = () => {
    return (
      <button
        className="btn btn-primary"
        type="button"
        onClick={openSignupPage}
      >
        <i className="icon-basket"></i>Reserve
      </button>
    );
  };

  const renderClient = () => {
    return (
      <button
        className="btn btn-primary"
        type="button"
        onClick={openNewReservationPage}
      >
        <i className="icon-basket"></i>Reserve
      </button>
    );
  };

  return (
    <main className="page product-page">
      <section className="clean-block clean-product dark">
        <div className="container">
          <Heading
            title={"Vehicle detail"}
            description={
              "Vehicle detal for: " +
              vehicle.brand +
              " " +
              vehicle.model +
              " " +
              vehicle.productionYear
            }
          />
          <div className="block-content">
            <div className="product-info">
              <div className="row">
                <div className="col-md-6">
                  <div className="image">{renderImage(vehicle)}</div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    <h3>
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <div className="price">
                      <h3>${vehicle.price} / day</h3>
                    </div>
                    {LoggedUserService.isUserLoggedIn()
                      ? renderClient()
                      : renderGuest()}
                    <div className="summary">
                      <p>
                        Type: {vehicle.type} <br />
                        Seat number: {vehicle.seatNumber} <br />
                        Geatbox: {vehicle.gearbox} <br />
                        Fuel: {vehicle.fuel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VehicleDetal;
