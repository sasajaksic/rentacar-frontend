import ApiRoutes from "../config/ApiRoutes";
import LoggedUserService from "./LoggedUserService";

const ReservationService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_RESERVATIONS)
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

  getById: (reservationId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.RESERVATION_BY_ID + reservationId)
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

  myReservations: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.MY_RESERVATIONS, {
        headers: LoggedUserService.getHeadersForRequest()
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

  updateReservation: (reservationId, reservation) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_RESERVATION + reservationId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(reservation),
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

  createNewReservation: (location) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_RESERVATION, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
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

  deleteById: (reservationId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.RESERVATION_BY_ID + reservationId, {
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

export default ReservationService;
