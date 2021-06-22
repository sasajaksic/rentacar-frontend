import React, { useEffect, useState } from "react";
import FileUtils from "../../utils/FileUtils";
import AppuserService from "../../services/AppuserService";

const LocationForm = ({ location, sendLocation }) => {
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [manager, setManager] = useState("");
  const [image, setImage] = useState("");

  const [allAppusers, setAllAppusers] = useState([]);

  useEffect(() => {
    AppuserService.getAll()
      .then((data) => {
        setAllAppusers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [formErrors, setFormErrors] = useState({
    city: null,
    street: null,
    number: null,
    manager: null,
    image: null,
  });

  useEffect(() => {
    setCity(location ? location.city : "");
    setStreet(location ? location.street : "");
    setNumber(location ? location.number : "");
    setManager(location ? location.manager.id : "");
    setImage(location ? location.image : "");
  }, [location]);

  const selectImage = (image) => {
    FileUtils.convertFileToBase64(image).then(setImage);
  };

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      city: null,
      street: null,
      number: null,
      manager: null,
      image: null,
    };

    if (city === "") {
      tmpFormErrors.city = "You must enter location city!";
      formValid = false;
    }

    if (street === "") {
      tmpFormErrors.street = "You must enter location street!";
      formValid = false;
    }

    if (number === "") {
      tmpFormErrors.number = "You must enter location number!";
      formValid = false;
    }

    if (manager === "") {
      tmpFormErrors.number = "You must enter location manager!";
      formValid = false;
    }

    if (image === "") {
      tmpFormErrors.image = "You must enter location image!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewLocation = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let locationObj = {
      city: city,
      street: street,
      number: number,
      manager: manager,
      image: image,
    };

    sendLocation(locationObj);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="city">
          City{" "}
          {formErrors.city ? (
            <span style={{ color: "red" }}>{formErrors.city}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="form-control item"
          id="city"
        />
      </div>
      <div className="form-group">
        <label htmlFor="street">
          Street{" "}
          {formErrors.street ? (
            <span style={{ color: "red" }}>{formErrors.street}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          type="text"
          className="form-control"
          id="street"
        />
      </div>
      <div className="form-group">
        <label htmlFor="number">
          Number{" "}
          {formErrors.number ? (
            <span style={{ color: "red" }}>{formErrors.number}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="text"
          className="form-control"
          id="number"
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
            Select location manager:{" "}
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
        <label htmlFor="image">
          Image:
          {formErrors.image ? (
            <span style={{ color: "red" }}>{formErrors.image}</span>
          ) : (
            ""
          )}
        </label>
        <input
          onChange={(e) => selectImage(e.target.files[0])}
          type="file"
          className="form-control"
          id="image"
        />
      </div>
      <button
        onClick={saveNewLocation}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Location
      </button>
    </form>
  );
};

export default LocationForm;
