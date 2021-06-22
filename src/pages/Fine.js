import React, { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import FineService from "../services/FineService";
import { useHistory } from "react-router-dom";

const Fine = () => {
  const history = useHistory();
  const [fines, setFines] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddFine = () => {
    history.push("/AddUpdateFine/");
  };

  const openUpdateFine = (fineId) => {
    history.push("/AddUpdateFine/?fineId=" + fineId);
  };

  const deleteFine = (fineId) => {
    FineService.deleteById(fineId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    FineService.getAll()
      .then((data) => {
        setFines(data);
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
              title={"Fines"}
              description={"Here you can add, update od delete fines!"}
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
                      onClick={openAddFine}
                    >
                      <i className="icon-plus"></i>Add Fine
                    </button>
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Type</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fines.map((fine, index) => (
                          <tr key={index}>
                            <td>{fine.id}</td>
                            <td>{fine.type}</td>
                            <td>{fine.description}</td>
                            <td>{fine.price}</td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => openUpdateFine(fine.id)}
                              >
                                <i className="icon-pencil"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => deleteFine(fine.id)}
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
                            <strong>Type</strong>
                          </td>
                          <td>
                            <strong>Description</strong>
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
    </div>
  );
};

export default Fine;
