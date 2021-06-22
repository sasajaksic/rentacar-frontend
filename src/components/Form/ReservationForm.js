import React, { useEffect, useState } from "react";
import AppuserService from "../../services/AppuserService";
import LocationService from "../../services/LocationService";
import VehicleService from "../../services/VehicleService";

const ReservationForm = ({ reservation, sendReservation }) => {
  const [date, setDate] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [price, setPrice] = useState("");
  const [manager, setManager] = useState("");
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");
  const [vehicle, setVehicle] = useState("");

  const [allAppusers, setAllAppusers] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);

  useEffect(() => {
    Promise.all([
      AppuserService.getAll(),
      LocationService.getAll(),
      VehicleService.getAll(),
    ])
      .then(([appUsers, locations, vehicles]) => {
        setAllAppusers(appUsers);
        setAllLocations(locations);
        setAllVehicles(vehicles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(allLocations);
    console.log(allVehicles);
  }, [allLocations, allVehicles]);

  const [formErrors, setFormErrors] = useState({
    date: null,
    pickupDate: null,
    returnDate: null,
    price: null,
    manager: null,
    client: null,
    location: null,
    vehicle: null,
  });

  useEffect(() => {
    setDate(reservation ? reservation.date : "");
    setPickupDate(reservation ? reservation.pickupDate : "");
    setReturnDate(reservation ? reservation.returnDate : "");
    setPrice(reservation ? reservation.price : "");
    setManager(reservation ? reservation.manager.id : "");
    setClient(reservation ? reservation.client.id : "");
    setLocation(reservation ? reservation.location.id : "");
    setVehicle(reservation ? reservation.vehicle.id : "");
  }, [reservation]);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      date: null,
      pickupDate: null,
      returnDate: null,
      price: null,
      manager: null,
      client: null,
      location: null,
      vehicle: null,
    };

    if (date === "") {
      tmpFormErrors.date = " You must enter reservation date!";
      formValid = false;
    }
    if (pickupDate === "") {
      tmpFormErrors.pickupDate = " You must enter reservation pickup date!";
      formValid = false;
    }
    if (returnDate === "") {
      tmpFormErrors.returnDate = " You must enter reservation return date!";
      formValid = false;
    }
    if (price === "") {
      tmpFormErrors.price = " You must enter reservation price!";
      formValid = false;
    }
    if (manager === "") {
      tmpFormErrors.manager = " You must enter reservation manager!";
      formValid = false;
    }
    if (client === "") {
      tmpFormErrors.client = " You must enter reservation client!";
      formValid = false;
    }
    if (location === "") {
      tmpFormErrors.location = " You must enter reservation location!";
      formValid = false;
    }
    if (vehicle === "") {
      tmpFormErrors.vehicle = " You must enter reservation vehicle!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewReservation = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log(manager);
    console.log(client);
    console.log(location);
    console.log(vehicle);

    let reservationObj = {
      date: date,
      pickupDate: pickupDate,
      returnDate: returnDate,
      price: price,
      manager: manager,
      client: client,
      location: location,
      vehicle: vehicle,
    };

    sendReservation(reservationObj);
    console.log(reservationObj);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="date">
          Date{" "}
          {formErrors.date ? (
            <span style={{ color: "red" }}>{formErrors.date}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
          type="date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="pickup-date">
          Pickup Date:{" "}
          {formErrors.pickupDate ? (
            <span style={{ color: "red" }}>{formErrors.pickupDate}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          className="form-control"
          type="date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="return-date">
          Return Date:{" "}
          {formErrors.returnDate ? (
            <span style={{ color: "red" }}>{formErrors.returnDate}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          className="form-control"
          type="date"
        />
      </div>

      <div className="form-group">
        <label htmlFor="price">
          Price:
          {formErrors.price ? (
            <span style={{ color: "red" }}>{formErrors.price}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          className="form-control"
          id="price"
        />
      </div>

      <div className="form-group">
        <label htmlFor="manager">
          Manager:
          {formErrors.manager ? (
            <span style={{ color: "red" }}>{formErrors.manager}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select reservation manager:{" "}
          </option>
          ;
          {allAppusers.map((manager, index) => {
            if (manager.role === 1)
              return (
                <option key={index} value={manager.id}>
                  {manager.firstName + " " + manager.lastName}
                </option>
              );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="client">
          Client:
          {formErrors.client ? (
            <span style={{ color: "red" }}>{formErrors.client}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={client}
          onChange={(e) => setClient(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select reservation client:{" "}
          </option>
          ;
          {allAppusers.map((client, index) => {
            if (client.role === 0)
              return (
                <option key={index} value={client.id}>
                  {client.firstName + " " + client.lastName}
                </option>
              );
          })}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="location">
          Location:
          {formErrors.location ? (
            <span style={{ color: "red" }}>{formErrors.location}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select reservation location:{" "}
          </option>
          ;
          {allLocations.map((location, index) => (
            <option key={index} value={location.id}>
              {location.city + " " + location.street}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="vehicle">
          Vehicle:
          {formErrors.vehicle ? (
            <span style={{ color: "red" }}>{formErrors.vehicle}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select reservation vehicle:{" "}
          </option>
          ;
          {allVehicles.map((vehicle, index) => (
            <option key={index} value={vehicle.id}>
              {vehicle.brand + " " + vehicle.model}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={saveNewReservation}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Reservation
      </button>
    </form>
  );
};

export default ReservationForm;
