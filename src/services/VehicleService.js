import ApiRoutes from "../config/ApiRoutes";
import LoggedUserService from "./LoggedUserService";

const VehicleService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_VEHICLES)
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

  getById: (vehicleId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.VEHICLE_BY_ID + vehicleId)
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

  updateVehicle: (vehicleId, vehicle) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_VEHICLE + vehicleId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...LoggedUserService.getHeadersForRequest(),
        },
        method: "PUT",
        body: JSON.stringify(vehicle),
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

  createNewVehicle: (vehicle) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_VEHICLE, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...LoggedUserService.getHeadersForRequest(),
        },
        method: "POST",
        body: JSON.stringify(vehicle),
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

  deleteById: (vehicleId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.VEHICLE_BY_ID + vehicleId, {
        headers: {
          ...LoggedUserService.getHeadersForRequest(),
        },
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

export default VehicleService;
