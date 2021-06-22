import ApiRoutes from "../config/ApiRoutes";

const LocationService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_LOCATIONS)
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

  getById: (locationId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.LOCATION_BY_ID + locationId)
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

  updateLocation: (locationId, location) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_LOCATION + locationId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(location),
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

  createNewLocation: (location) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_LOCATION, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(location),
      })
        .then((response) => {
          if (!response.ok) {
            reject("OVDE NE RADI");
          }

          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },

  deleteById: (locationId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.LOCATION_BY_ID + locationId, {
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

export default LocationService;
