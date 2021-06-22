import ApiRoutes from "../config/ApiRoutes";

const RentService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_RENTS)
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

  getById: (rentId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.RENT_BY_ID + rentId)
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

  updateRent: (rentId, rent) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_RENT + rentId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(rent),
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

  createNewRent: (rent) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_RENT, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(rent),
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

  deleteById: (rentId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.RENT_BY_ID + rentId, {
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

export default RentService;
