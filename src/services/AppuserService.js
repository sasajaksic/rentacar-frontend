import ApiRoutes from "../config/ApiRoutes";
import LoggedUserService from "../services/LoggedUserService";

const AppuserService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_APPUSERS, {
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

  getById: (appuserId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.APPUSER_BY_ID + appuserId)
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  },

  getByEmail: (email) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.APPUSER_BY_EMAIL + email)
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  },

  login: (email, password) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.LOGIN, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            reject("nije ok");
          }

          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  },

  logOut: () => {
    localStorage.removeItem("appuser");
  },

  updateAppuser: (appuserId, appuser) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_APPUSER + appuserId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(appuser),
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

  createNewAppuser: (appuser) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_APPUSER, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(appuser),
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

  deleteById: (appuserId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.APPUSER_BY_ID + appuserId, {
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

export default AppuserService;
