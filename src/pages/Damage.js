import React, { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import DamageService from "../services/DamageService";
import { useHistory } from "react-router-dom";

const Damage = () => {
  const history = useHistory();
  const [damages, setDamages] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddDamage = () => {
    history.push("/AddUpdateDamage/");
  };

  const openUpdateDamage = (damageId) => {
    history.push("/AddUpdateDamage/?damageId=" + damageId);
  };

  const deleteDamage = (damageId) => {
    DamageService.deleteById(damageId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    DamageService.getAll()
      .then((data) => {
        setDamages(data);
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
              title={"Damages"}
              description={"Here you can add, update od delete damages!"}
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
                      onClick={openAddDamage}
                    >
                      <i className="icon-plus"></i>Add Damage
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
                        {damages.map((damage, index) => (
                          <tr key={index}>
                            <td>{damage.id}</td>
                            <td>{damage.type}</td>
                            <td>{damage.description}</td>
                            <td>{damage.price}</td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => openUpdateDamage(damage.id)}
                              >
                                <i className="icon-pencil"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => deleteDamage(damage.id)}
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

export default Damage;
