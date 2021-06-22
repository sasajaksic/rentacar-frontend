import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import Product from "../components/Product/Product";
import VehicleService from "../services/VehicleService";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import { useHistory } from "react-router-dom";
import LoggedUserService from "../services/LoggedUserService";

const Vehicle = () => {
  const history = useHistory();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const [types, setTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [seatNumbers, setSeatNumbers] = useState([]);

  const [typeFilter, setTypeFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const [seatNumberFilter, setSeatNumberFilter] = useState(null);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openNewVehicle = () => {
    history.push("/AddUpdateVehicle/");
  };

  const editVehicle = (vehicleId) => {
    history.push("/AddUpdateVehicle/?vehicleId=" + vehicleId);
  };

  useEffect(() => {
    filterVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter, brandFilter, seatNumberFilter]);

  useEffect(() => {
    VehicleService.getAll()
      .then((data) => {
        setVehicles(data);
        setFilteredVehicles(data);
        populateFiltersData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [triggerRefresh]);

  const populateFiltersData = (data) => {
    setTypes([...new Set(data.map((vehicle) => vehicle.type))]);
    setBrands([...new Set(data.map((vehicle) => vehicle.brand))]);
    setSeatNumbers([...new Set(data.map((vehicle) => vehicle.seatNumber))]);
  };

  const deleteVehicle = (vehcleId) => {
    VehicleService.deleteById(vehcleId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  const filterVehicles = () => {
    let tempVehicles = [...vehicles];

    if (typeFilter) {
      tempVehicles = tempVehicles.filter(
        (vehicle) => vehicle.type === typeFilter
      );
    }

    if (brandFilter) {
      tempVehicles = tempVehicles.filter(
        (vehicle) => vehicle.brand === brandFilter
      );
    }

    if (seatNumberFilter) {
      tempVehicles = tempVehicles.filter(
        (vehicle) => vehicle.seatNumber === parseInt(seatNumberFilter)
      );
    }

    setFilteredVehicles(tempVehicles);
  };

  const renderGuest = () => {
    return (
      <div>
        <main className="page catalog-page">
          <section className="clean-block clean-catalog dark">
            <div className="container">
              <Heading
                title={"Vehicles"}
                description={"Here you can view and reserve our vehicles!"}
              />
              <div className="content">
                <div className="row">
                  <div className="col-md-3">
                    <div className="d-none d-md-block">
                      <div className="filters">
                        <div className="filter-item">
                          <div>
                            <h3>Type</h3>
                            <RadioGroup
                              radioGroupName="Type"
                              elements={types}
                              onChange={setTypeFilter}
                              unselectValue="Any"
                            />
                          </div>
                        </div>
                        <div className="filter-item">
                          <div>
                            <h3>Brands</h3>
                            <RadioGroup
                              radioGroupName="Brands"
                              elements={brands}
                              onChange={setBrandFilter}
                              unselectValue="Any"
                            />
                          </div>
                        </div>
                        <div className="filter-item">
                          <div>
                            <h3>Seat Number</h3>
                            <RadioGroup
                              radioGroupName="Seat Number"
                              elements={seatNumbers}
                              onChange={setSeatNumberFilter}
                              unselectValue="Any"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="products">
                      <div className="row no-gutters">
                        {filteredVehicles.length === 0 ? (
                          <h1>No vehicles with these filters!</h1>
                        ) : (
                          filteredVehicles.map((vehicle, index) => (
                            <Product key={index} vehicle={vehicle} />
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  };

  const renderClient = () => {
    return (
      <div>
        <main className="page catalog-page">
          <section className="clean-block clean-catalog dark">
            <div className="container">
              <Heading
                title={"Vehicles"}
                description={"Here you can view and reserve our vehicles!"}
              />
              <div className="content">
                <div className="row">
                  <div className="col-md-3">
                    <div className="d-none d-md-block">
                      <div className="filters">
                        <div className="filter-item">
                          <div>
                            <h3>Type</h3>
                            <RadioGroup
                              radioGroupName="Type"
                              elements={types}
                              onChange={setTypeFilter}
                              unselectValue="Any"
                            />
                          </div>
                        </div>
                        <div className="filter-item">
                          <div>
                            <h3>Brands</h3>
                            <RadioGroup
                              radioGroupName="Brands"
                              elements={brands}
                              onChange={setBrandFilter}
                              unselectValue="Any"
                            />
                          </div>
                        </div>
                        <div className="filter-item">
                          <div>
                            <h3>Seat Number</h3>
                            <RadioGroup
                              radioGroupName="Seat Number"
                              elements={seatNumbers}
                              onChange={setSeatNumberFilter}
                              unselectValue="Any"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="products">
                      <div className="row no-gutters">
                        {filteredVehicles.length === 0 ? (
                          <h1>No vehicles with these filters!</h1>
                        ) : (
                          filteredVehicles.map((vehicle, index) => (
                            <Product key={index} vehicle={vehicle} />
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  };

  const renderAdmin = () => {
    return (
      <main className="page service-page">
        <section className="clean-block clean-services dark">
          <div className="container">
            <Heading
              title={"Vehicles"}
              description={"Here you can view all vehicles!"}
            />
            <div className="content">
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
                      onClick={openNewVehicle}
                    >
                      <i className="icon-plus"></i>Add Vehicle
                    </button>
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Brand</th>
                          <th>Model</th>
                          <th>Production Year</th>
                          <th>Type</th>
                          <th>Gearbox</th>
                          <th>Fuel</th>
                          <th>Seat Number</th>
                          <th>Door Number</th>
                          <th>Price</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vehicles.map((vehicle, index) => (
                          <tr key={index} vehicle={vehicle}>
                            <td>{vehicle.id}</td>
                            <td>{vehicle.brand}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.productionYear}</td>
                            <td>{vehicle.type}</td>
                            <td>{vehicle.gearbox}</td>
                            <td>{vehicle.fuel}</td>
                            <td>{vehicle.seatNumber}</td>
                            <td>{vehicle.doorNumber}</td>
                            <td>{vehicle.price}</td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => editVehicle(vehicle.id)}
                              >
                                <i className="icon-pencil"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => deleteVehicle(vehicle.id)}
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
                            <strong>Brand</strong>
                          </td>
                          <td>
                            <strong>Model</strong>
                          </td>
                          <td>
                            <strong>Production Year</strong>
                          </td>
                          <td>
                            <strong>Type</strong>
                          </td>
                          <td>
                            <strong>Gearbox</strong>
                          </td>
                          <td>
                            <strong>Fuel</strong>
                          </td>
                          <td>
                            <strong>Seat Number</strong>
                          </td>
                          <td>
                            <strong>Door Number</strong>
                          </td>
                          <td>
                            <strong>Price</strong>
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
          </div>
        </section>
      </main>
    );
  };

  return (
    <div>
      {LoggedUserService.isManagerLoggedIn()
        ? renderAdmin()
        : LoggedUserService.isUserLoggedIn()
        ? renderClient()
        : renderGuest()}
    </div>
  );
};

export default Vehicle;
