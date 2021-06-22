import React, { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import Dealership from "../components/Dealership/Dealership";
import LocationService from "../services/LocationService";
import { useHistory } from "react-router-dom";
import LoggedUserService from "../services/LoggedUserService";

const Location = () => {
  const history = useHistory();
  const [locations, setLocations] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddLocation = () => {
    history.push("/AddUpdateLocation");
  };

  const openUpdateLocation = (locationId) => {
    history.push("/AddUpdateLocation/?locationId=" + locationId);
  };

  const deleteLocation = (locationId) => {
    LocationService.deleteById(locationId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    LocationService.getAll()
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [triggerRefresh]);

  const renderGuest = () => {
    return (
      <div className="row">
        {locations.map((location, index) => (
          <Dealership key={index} location={location} />
        ))}
      </div>
    );
  };

  const renderClient = () => {
    return (
      <div className="row">
        {locations.map((location, index) => (
          <Dealership key={index} location={location} />
        ))}
      </div>
    );
  };

  const renderAdmin = () => {
    return (
      <div className="container-fluid">
        <div className="card shadow">
          <div className="card-body">
            <div
              className="table-responsive table mt-2"
              id="dataTable"
              role="grid"
              aria-describedby="dataTable_info"
            >
              <button
                className="btn btn-primary mb-2"
                type="button"
                onClick={openAddLocation}
              >
                <i className="icon-plus"></i>Add Location
              </button>

              <table className="table my-0" id="dataTable">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>Number</th>
                    <th>Manager</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((location, index) => (
                    <tr key={index} location={location}>
                      <td>{location.id}</td>
                      <td>{location.city}</td>
                      <td>{location.street}</td>
                      <td>{location.number}</td>
                      <td>
                        {location.manager.firstName} {location.manager.lastName}
                      </td>
                      <td>
                        <button
                          id="smallButton"
                          className="btn"
                          type="button"
                          onClick={() => openUpdateLocation(location.id)}
                        >
                          <i className="icon-pencil"></i>
                        </button>
                      </td>
                      <td>
                        <button
                          id="smallButton"
                          className="btn"
                          type="button"
                          onClick={() => deleteLocation(location.id)}
                        >
                          <i className="icon-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <strong>Id</strong>
                    </td>
                    <td>
                      <strong>City</strong>
                    </td>
                    <td>
                      <strong>Street</strong>
                    </td>
                    <td>
                      <strong>Number</strong>
                    </td>
                    <td>
                      <strong>Manager</strong>
                    </td>
                    <td>
                      <strong>Update</strong>
                    </td>
                    <td>
                      <strong>Delete</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <main className="page service-page">
        <section className="clean-block clean-services dark">
          <div className="container">
            <Heading
              title={"Locations"}
              description={"Here you can view all locations!"}
            />

            {LoggedUserService.isManagerLoggedIn()
              ? renderAdmin()
              : LoggedUserService.isUserLoggedIn()
              ? renderClient()
              : renderGuest()}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Location;
