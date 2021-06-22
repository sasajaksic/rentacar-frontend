import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import ReservationService from "../services/ReservationService";
import { useHistory } from "react-router-dom";
import LoggedUserService from "../services/LoggedUserService";

const Reservation = () => {
  const history = useHistory();
  const [reservations, setReservations] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddReservation = () => {
    history.push("/AddUpdateReservation/");
  };

  const openUpdateReservation = (reservationId) => {
    history.push("/AddUpdateReservation/?reservationId=" + reservationId);
  };

  const deleteReservation = (reservationId) => {
    ReservationService.deleteById(reservationId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    if (LoggedUserService.isManagerLoggedIn()) {
      ReservationService.getAll()
        .then((data) => {
          setReservations(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    if (LoggedUserService.isUserLoggedIn()) {
      ReservationService.myReservations()
        .then((data) => {
          setReservations(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [triggerRefresh]);

  return (
    <div>
      <main className="page service-page">
        <section className="clean-block clean-services dark">
          <div className="container">
            <Heading
              title={"Reservations"}
              description={"Here you can view reservations!"}
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
                    {LoggedUserService.isManagerLoggedIn() ? (
                      <button
                        className="btn btn-primary mb-2"
                        type="button"
                        onClick={openAddReservation}
                      >
                        <i className="icon-plus"></i>Add Reservation
                      </button>
                    ) : (
                      <label>Your reservations:</label>
                    )}
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Date</th>
                          <th>Pickup Date</th>
                          <th>Return Date</th>
                          <th>Price</th>
                          <th>Manager</th>
                          <th>Client</th>
                          <th>Location</th>
                          <th>Vehicle</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservations.map((reservation, index) => (
                          <tr key={index}>
                            <td>{reservation.id}</td>
                            <td>{reservation.date}</td>
                            <td>{reservation.pickupDate}</td>
                            <td>{reservation.returnDate}</td>
                            <td>{reservation.price}</td>

                            <td>{reservation.manager.username}</td>
                            <td>{reservation.client.username}</td>
                            <td>
                              {reservation.location.city +
                                " " +
                                reservation.location.street}
                            </td>
                            <td>
                              {reservation.vehicle.brand +
                                " " +
                                reservation.vehicle.model}
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() =>
                                  openUpdateReservation(reservation.id)
                                }
                              >
                                <i className="icon-pencil"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() =>
                                  deleteReservation(reservation.id)
                                }
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
                            <strong>Pickup Date</strong>
                          </td>
                          <td>
                            <strong>Return Date</strong>
                          </td>
                          <td>
                            <strong>Price</strong>
                          </td>
                          <td>
                            <strong>Manager</strong>
                          </td>
                          <td>
                            <strong>Client</strong>
                          </td>
                          <td>
                            <strong>Location</strong>
                          </td>
                          <td>
                            <strong>Vehicle</strong>
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

export default Reservation;
