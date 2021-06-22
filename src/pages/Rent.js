import React from "react";
import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import RentService from "../services/RentService";
import { useHistory } from "react-router-dom";

const Rent = () => {
  const history = useHistory();
  const [rents, setRents] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddRent = () => {
    history.push("/AddUpdateRent/");
  };

  const openUpdateRent = (rentId) => {
    history.push("/AddUpdateRent/?rentId=" + rentId);
  };

  const deleteRent = (rentId) => {
    RentService.deleteById(rentId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    RentService.getAll()
      .then((data) => {
        setRents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [triggerRefresh]);

  return (
    <div>
      <main className="page service-page">
        <section className="clean-block clean-services dark">
          <div className="container">
            <Heading
              title={"Rents"}
              description={"Here you can add, update od delete rents!"}
            />
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
                      onClick={openAddRent}
                    >
                      <i className="icon-plus"></i>Add Rent
                    </button>
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Date</th>
                          <th>Deposit</th>
                          <th>Price</th>
                          <th>Payment Method</th>
                          <th>Reservation</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rents.map((rent, index) => (
                          <tr key={index}>
                            <td>{rent.id}</td>
                            <td>{rent.date}</td>
                            <td>{rent.deposit}</td>
                            <td>{rent.price}</td>
                            <td>{rent.paymentMethod.method}</td>
                            <td>{rent.reservation.id}</td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => openUpdateRent(rent.id)}
                              >
                                <i className="icon-pencil"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => deleteRent(rent.id)}
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
                            <strong>Date</strong>
                          </td>
                          <td>
                            <strong>Deposit</strong>
                          </td>
                          <td>
                            <strong>Price</strong>
                          </td>
                          <td>
                            <strong>Payment Method</strong>
                          </td>
                          <td>
                            <strong>Reservation</strong>
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
    </div>
  );
};

export default Rent;
