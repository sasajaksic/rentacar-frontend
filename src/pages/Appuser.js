import React, { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import AppuserService from "../services/AppuserService";
import { useHistory } from "react-router-dom";

const Appuser = () => {
  const history = useHistory();
  const [appusers, setAppusers] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddAppuser = () => {
    history.push("/AddUpdateAppuser/");
  };

  const openUpdateAppuser = (appuserId) => {
    history.push("/AddUpdateAppuser/?appuserId=" + appuserId);
  };

  const deleteAppuser = (appuserId) => {
    AppuserService.deleteById(appuserId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    AppuserService.getAll()
      .then((data) => {
        setAppusers(data);
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
              title={"Appusers"}
              description={"Here you can add, update od delete appusers!"}
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
                      onClick={openAddAppuser}
                    >
                      <i className="icon-plus"></i>Add Appuser
                    </button>
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Role</th>
                          <th>Name</th>
                          <th>Username</th>
                          <th>Password</th>
                          <th>Adress</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appusers.map((appuser, index) => (
                          <tr key={index}>
                            <td>{appuser.id}</td>
                            <td>{appuser.role}</td>
                            <td>
                              {appuser.firstName + " " + appuser.lastName}
                            </td>
                            <td>{appuser.username}</td>
                            <td>{appuser.password}</td>
                            <td>{appuser.adress}</td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => openUpdateAppuser(appuser.id)}
                              >
                                <i className="icon-pencil"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => deleteAppuser(appuser.id)}
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
                            <strong>Role</strong>
                          </td>
                          <td>
                            <strong>Name</strong>
                          </td>
                          <td>
                            <strong>Username</strong>
                          </td>

                          <td>
                            <strong>Password</strong>
                          </td>
                          <td>
                            <strong>Adress</strong>
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

export default Appuser;
