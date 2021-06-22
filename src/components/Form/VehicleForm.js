import React, { useEffect, useState } from "react";
import VehicleService from "../../services/VehicleService";
import FileUtils from "../../utils/FileUtils";

const VehicleForm = ({ vehicle, sendVehicle }) => {
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [doorNumber, setDoorNumber] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [formErrors, setFormErrors] = useState({
    type: null,
    brand: null,
    model: null,
    productionYear: null,
    seatNumber: null,
    doorNumber: null,
    gearbox: null,
    fuel: null,
    price: null,
    image: null,
  });

  useEffect(() => {
    setType(vehicle ? vehicle.type : "");
    setBrand(vehicle ? vehicle.brand : "");
    setModel(vehicle ? vehicle.model : "");
    setProductionYear(vehicle ? vehicle.productionYear : "");
    setSeatNumber(vehicle ? vehicle.seatNumber : "");
    setDoorNumber(vehicle ? vehicle.doorNumber : "");
    setGearbox(vehicle ? vehicle.gearbox : "");
    setFuel(vehicle ? vehicle.fuel : "");
    setPrice(vehicle ? vehicle.price : "");
    setImage(vehicle ? vehicle.image : "");
  }, [vehicle]);

  const selectImage = (image) => {
    FileUtils.convertFileToBase64(image).then(setImage);
  };

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      type: null,
      brand: null,
      model: null,
      productionYear: null,
      seatNumber: null,
      doorNumber: null,
      gearbox: null,
      fuel: null,
      price: null,
      image: null,
    };

    if (type === "") {
      tmpFormErrors.type = " You must enter vehicle type!";
      formValid = false;
    }

    if (brand === "") {
      tmpFormErrors.brand = " You must enter vehicle brand!";
      formValid = false;
    }

    if (model === "") {
      tmpFormErrors.model = " You must enter vehicle model!";
      formValid = false;
    }

    if (productionYear === "") {
      tmpFormErrors.productionYear = " You must enter vehicle production year!";
      formValid = false;
    }

    if (seatNumber === "") {
      tmpFormErrors.seatNumber = " You must enter vehicle seat number!";
      formValid = false;
    }

    if (doorNumber === "") {
      tmpFormErrors.doorNumber = " You must enter vehicle door number!";
      formValid = false;
    }

    if (gearbox === "") {
      tmpFormErrors.gearbox = " You must enter vehicle gearbox!";
      formValid = false;
    }

    if (fuel === "") {
      tmpFormErrors.fuel = " You must enter vehicle price!";
      formValid = false;
    }

    if (price === "") {
      tmpFormErrors.price = " You must enter vehicle price!";
      formValid = false;
    }

    if (image === "") {
      tmpFormErrors.image = " You must enter vehicle image!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewVehicle = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let vehicleObj = {
      type: type,
      brand: brand,
      model: model,
      productionYear: productionYear,
      seatNumber: seatNumber,
      doorNumber: doorNumber,
      gearbox: gearbox,
      fuel: fuel,
      price: price,
      image: image,
    };

    sendVehicle(vehicleObj);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="type">
          Type:
          {formErrors.type ? (
            <span style={{ color: "red" }}>{formErrors.type}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select vehicle type:{" "}
          </option>
          <option value="SUV">SUV</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="Coupe">Coupe</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="brand">
          Brand:
          {formErrors.brand ? (
            <span style={{ color: "red" }}>{formErrors.brand}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select vehicle brand:{" "}
          </option>
          <option value="BMW">BMW</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Audi">Audi</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="Skoda">Skoda</option>
          <option value="Toyota">Toyota</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="model">
          Model:
          {formErrors.model ? (
            <span style={{ color: "red" }}>{formErrors.model}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          type="text"
          className="form-control"
          id="model"
        />
      </div>

      <div className="form-group">
        <label htmlFor="production-year">
          Production Year:
          {formErrors.productionYear ? (
            <span style={{ color: "red" }}>{formErrors.productionYear}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={productionYear}
          onChange={(e) => setProductionYear(e.target.value)}
          type="number"
          className="form-control"
          id="production-year"
        />
      </div>
      <div className="form-group">
        <label htmlFor="seat-number">
          Seat Number:
          {formErrors.seatNumber ? (
            <span style={{ color: "red" }}>{formErrors.seatNumber}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={seatNumber}
          onChange={(e) => setSeatNumber(e.target.value)}
          type="number"
          className="form-control"
          id="seat-number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="door-number">
          Door Number:
          {formErrors.doorNumber ? (
            <span style={{ color: "red" }}>{formErrors.doorNumber}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={doorNumber}
          onChange={(e) => setDoorNumber(e.target.value)}
          type="number"
          className="form-control"
          id="door-number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="gearbox">
          Gearbox:
          {formErrors.gearbox ? (
            <span style={{ color: "red" }}>{formErrors.gearbox}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={gearbox}
          onChange={(e) => setGearbox(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select vehicle gearbox:{" "}
          </option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="fuel">
          Fuel:
          {formErrors.fuel ? (
            <span style={{ color: "red" }}>{formErrors.fuel}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select vehicle fuel:{" "}
          </option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
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
        onClick={saveNewVehicle}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Vehicle
      </button>
    </form>
  );
};

export default VehicleForm;
