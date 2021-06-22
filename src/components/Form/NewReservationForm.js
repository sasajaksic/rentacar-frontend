import React, { useEffect, useState } from "react";
import AppuserService from "../../services/AppuserService";
import LocationService from "../../services/LocationService";
import LoggedUserService from "../../services/LoggedUserService";
import VehicleService from "../../services/VehicleService";

const ReservationForm = ({ vehicle, reservation, sendReservation }) => {
  const [date, setDate] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [price, setPrice] = useState("");
  const [manager, setManager] = useState("");
  const [client, setClient] = useState("");
  const [location, setLocation] = useState("");

  const [clientId, setClientId] = useState(LoggedUserService.getUserId());

  useEffect(() => {
    AppuserService.getById(clientId).then((data) => {
      setClient(data);
    });
  }, [setClientId]);

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

  const [locationManager, setLocationManager] = useState({
    adress: "",
    cardNumber: null,
    driverLicence: null,
    email: "",
    firstName: "",
    id: 1,
    lastName: "",
    password: "",
    phone: "",
    role: 1,
    username: "",
  });

  useEffect(() => {
    if (location !== "") {
      console.log(date);
      LocationService.getById(location).then((data) => {
        setLocationManager(data.manager);
      });
    }
  }, [location]);

  const [formErrors, setFormErrors] = useState({
    pickupDate: null,
    returnDate: null,
    price: null,
    client: null,
    location: null,
    vehicle: null,
  });

  useEffect(() => {
    calculatePrice();
  }, [pickupDate, returnDate]);

  const calculatePrice = () => {
    let date1 = new Date(pickupDate);
    let date2 = new Date(returnDate);
    let diffTime = Math.abs(date2 - date1);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");

    setPrice(diffDays * vehicle.price);
  };

  const todaysDay = () => {
    let separator = "-";
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      pickupDate: null,
      returnDate: null,
      location: null,
      vehicle: null,
    };

    if (pickupDate === "") {
      tmpFormErrors.pickupDate = " You must enter reservation pickup date!";
      formValid = false;
    }
    if (returnDate === "") {
      tmpFormErrors.returnDate = " You must enter reservation return date!";
      formValid = false;
    }
    if (returnDate < pickupDate) {
      tmpFormErrors.returnDate =
        " Return date must be greater than pickup date!";
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
    let managerNumber = locationManager.id;
    let clientNumber = client.id;
    let locationNumber = location;
    let vehicleNumber = vehicle.id;

    console.log(managerNumber);
    console.log(clientNumber);
    console.log(locationNumber);
    console.log(vehicleNumber);

    let reservationObj = {
      date: todaysDay(),
      pickupDate: pickupDate,
      returnDate: returnDate,
      price: price.toString(),
      manager: managerNumber.toString(),
      client: clientNumber.toString(),
      location: locationNumber.toString(),
      vehicle: vehicleNumber.toString(),
    };

    console.log(reservationObj);
    sendReservation(reservationObj);
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
        <br />
        <label htmlFor="date">Today is: {todaysDay()}</label>
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
        <label htmlFor="vehicle">
          Vehicle:
          {formErrors.vehicle ? (
            <span style={{ color: "red" }}>{formErrors.vehicle}</span>
          ) : (
            ""
          )}
        </label>
        <br />
        <label htmlFor="vehicle">
          {vehicle.brand + " " + vehicle.model + " " + vehicle.productionYear}
        </label>
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
          {allLocations.map((location, index) => (
            <option key={index} value={location.id}>
              {location.city + " " + location.street}
            </option>
          ))}
        </select>
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
        <br />
        <label htmlFor="vehicle">
          {locationManager.firstName + " " + locationManager.lastName}
        </label>
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
