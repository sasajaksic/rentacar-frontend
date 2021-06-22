import React, { useEffect, useState } from "react";
import ReportForm from "../../components/Form/ReportForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import ReportService from "../../services/ReportService";

const AddUpdateLocation = () => {
  const history = useHistory();
  const search = useLocation().search;
  const reportId = new URLSearchParams(search).get("reportId");
  const [report, setReport] = useState(null);

  useEffect(() => {
    if (reportId) {
      ReportService.getById(reportId).then(setReport).catch(console.error);
    }
  }, [reportId]);

  const receiveReport = (report) => {
    if (reportId) {
      ReportService.updateReport(reportId, report).then((data) => {
        history.push("/reports");
      });
    } else {
      ReportService.createNewReport(report).then((data) => {
        history.push("/reports");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New report"}
              description={"Enter new report information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <ReportForm report={report} sendReport={receiveReport} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateLocation;
