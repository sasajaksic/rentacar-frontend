import React, { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import ReportService from "../services/ReportService";
import { useHistory } from "react-router-dom";

const Report = () => {
  const history = useHistory();
  const [reports, setReports] = useState([]);

  const [triggerRefresh, setTriggerRefresh] = useState(true);

  const openAddReport = () => {
    history.push("/AddUpdateReport/");
  };

  const openUpdateReport = (reportId) => {
    history.push("/AddUpdateReport/?reportId=" + reportId);
  };

  const deleteReport = (reportId) => {
    ReportService.deleteById(reportId).then((data) => {
      setTriggerRefresh(!triggerRefresh);
    });
  };

  useEffect(() => {
    ReportService.getAll()
      .then((data) => {
        setReports(data);
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
              title={"Reports"}
              description={"Here you can add, update od delete reports!"}
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
                      onClick={openAddReport}
                    >
                      <i className="icon-plus"></i>Add Report
                    </button>
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Date</th>
                          <th>Type</th>
                          <th>Fuel Level</th>
                          <th>Fine</th>
                          <th>Damage</th>
                          <th>Update</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reports.map((report, index) => (
                          <tr key={index}>
                            <td>{report.id}</td>
                            <td>{report.date}</td>
                            <td>{report.type}</td>
                            <td>{report.fuelLevel}</td>
                            <td>{report.fine.type}</td>
                            <td>{report.damage.type}</td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => openUpdateReport(report.id)}
                              >
                                <i className="icon-pencil"></i>
                              </button>
                            </td>
                            <td>
                              <button
                                id="smallButton"
                                className="btn"
                                type="button"
                                onClick={() => deleteReport(report.id)}
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
                            <strong>Type</strong>
                          </td>
                          <td>
                            <strong>Fuel Level</strong>
                          </td>
                          <td>
                            <strong>Damage</strong>
                          </td>
                          <td>
                            <strong>Fine</strong>
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

export default Report;
