import ApiRoutes from "../config/ApiRoutes";
import LoggedUserService from "../services/LoggedUserService";

const ReportService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_REPORTS, {
        headers: {
          ...LoggedUserService.getHeadersForRequest(),
        },
      })
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },

  getById: (reportId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.REPORT_BY_ID + reportId)
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },

  updateReport: (reportId, report) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_REPORT + reportId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(report),
      })
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },

  createNewReport: (report) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_REPORT, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(report),
      })
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },

  deleteById: (reportId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.REPORT_BY_ID + reportId, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },
};

export default ReportService;
