import React, { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import PaymentMethodService from "../services/PaymentMethodService";
import { useHistory } from "react-router-dom";

const PaymentMethod = () => {
  const history = useHistory();

  const [paymentMethods, setPaymentMethods] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddPaymentMethod = () => {
    history.push("/AddUpdatePaymentMethod/");
  };

  const openUpdatePaymentMethod = (paymentMethodId) => {
    history.push("/AddUpdatePaymentMethod/?paymentMethodId=" + paymentMethodId);
  };

  const deletePaymentMethod = (paymentMethodId) => {
    PaymentMethodService.deleteById(paymentMethodId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    PaymentMethodService.getAll()
      .then((data) => {
        setPaymentMethods(data);
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
              title={"Payment Methods"}
              description={
                "Here you can add, update od delete payment methods!"
              }
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
                      onClick={openAddPaymentMethod}
                    >
                      <i className="icon-plus"></i>Add Payment Method
                    </button>
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Method</th>
                          <th>Description</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentMethods.map((paymentMethod, index) => (
                          <tr key={index}>
                            <td>{paymentMethod.id}</td>
                            <td>{paymentMethod.method}</td>
                            <td>{paymentMethod.description}</td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() =>
                                  openUpdatePaymentMethod(paymentMethod.id)
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
                                  deletePaymentMethod(paymentMethod.id)
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
                            <strong>Method</strong>
                          </td>
                          <td>
                            <strong>Description</strong>
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

export default PaymentMethod;
