import React, { useEffect, useState } from "react";
import ReportService from "../../services/ReportService";
import FineService from "../../services/FineService";
import DamageService from "../../services/DamageService";
import RentService from "../../services/RentService";

const ReportForm = ({ report, sendReport }) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [fuelLevel, setFuelLevel] = useState("");
  const [fine, setFine] = useState("");
  const [damage, setDamage] = useState("");
  const [rent, setRent] = useState("");

  const [allTypes, setAllTypes] = useState([]);
  const [allFines, setAllFines] = useState([]);
  const [allDamages, setAllDamages] = useState([]);
  const [allRents, setAllRents] = useState([]);

  useEffect(() => {
    Promise.all([
      FineService.getAll(),
      DamageService.getAll(),
      RentService.getAll(),
    ])
      .then(([fines, damages, rents]) => {
        setAllFines(fines);
        setAllDamages(damages);
        setAllRents(rents);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [formErrors, setFormErrors] = useState({
    date: null,
    type: null,
    fuelLevel: null,
    fine: null,
    damage: null,
    rent: null,
  });

  useEffect(() => {
    setDate(report ? report.date : "");
    setType(report ? report.type : "");
    setFuelLevel(report ? report.fuelLevel : "");
    setFine(report ? report.fine.id : "");
    setDamage(report ? report.damage.id : "");
    setRent(report ? report.rent : "");
    console.log(report);
  }, [report]);

  const validateForm = () => {
    let formValid = true;
    let tmpFormErrors = {
      date: null,
      type: null,
      fuelLevel: null,
      fine: null,
      damage: null,
      rent: null,
    };

    if (date === "") {
      tmpFormErrors.date = " You must enter report date!";
      formValid = false;
    }

    if (type === "") {
      tmpFormErrors.type = " You must enter report type!";
      formValid = false;
    }

    if (fuelLevel === "") {
      tmpFormErrors.fuelLevel = " You must enter report fuel level!";
      formValid = false;
    }

    if (fine === "") {
      tmpFormErrors.fine = " You must enter report fine!";
      formValid = false;
    }

    if (damage === "") {
      tmpFormErrors.damage = " You must enter report damage!";
      formValid = false;
    }

    if (rent === "") {
      tmpFormErrors.rent = " You must enter report rent!";
      formValid = false;
    }

    setFormErrors(tmpFormErrors);
    return formValid;
  };

  const saveNewReport = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let reportObj = {
      date: date,
      type: type,
      fuelLevel: fuelLevel,
      fine: fine,
      damage: damage,
      rent: rent,
    };

    console.log(reportObj);
    sendReport(reportObj);
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
            Select report type:{" "}
          </option>
          <option value="Initial report">Initial report</option>
          <option value="Fine report">Fine report</option>
          <option value="Damage report">Damage report</option>
          <option value="Return report">Return report</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="fuel-level">
          Fuel Level:
          {formErrors.fuelLevel ? (
            <span style={{ color: "red" }}>{formErrors.fuelLevel}</span>
          ) : (
            ""
          )}
        </label>
        <input
          value={fuelLevel}
          onChange={(e) => setFuelLevel(e.target.value)}
          type="number"
          className="form-control"
          id="fuel-level"
        />
      </div>
      <div className="form-group">
        <label htmlFor="fine">
          Fine:
          {formErrors.fine ? (
            <span style={{ color: "red" }}>{formErrors.fine}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={fine}
          onChange={(e) => setFine(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select fine:{" "}
          </option>
          {allFines.map((fine, index) => (
            <option key={index} value={fine.id}>
              {fine.type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="damage">
          Damage:
          {formErrors.damage ? (
            <span style={{ color: "red" }}>{formErrors.damage}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={damage}
          onChange={(e) => setDamage(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select damage:{" "}
          </option>
          {allDamages.map((damage, index) => (
            <option key={index} value={damage.id}>
              {damage.type}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="price">
          Rent:
          {formErrors.rent ? (
            <span style={{ color: "red" }}>{formErrors.rent}</span>
          ) : (
            ""
          )}
        </label>
        <select
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="form-control"
        >
          <option value="null" disabled hidden>
            {" "}
            Select rent:{" "}
          </option>
          {allRents.map((rent, index) => (
            <option key={index} value={rent.id}>
              {rent.id + " : " + rent.price + "$ (" + rent.date + ")"}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={saveNewReport}
        className="btn btn-primary btn-block"
        type="submit"
      >
        Save Report
      </button>
    </form>
  );
};

export default ReportForm;
