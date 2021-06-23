import ApiRoutes from "../config/ApiRoutes";
import LoggedUserService from "../services/LoggedUserService";

const PaymentMethodService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_PAYMENT_METHODS, {
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

  getById: (paymentMethodId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.PAYMENT_METHOD_BY_ID + paymentMethodId)
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

  updatePaymentMethod: (paymentMethodId, paymentMethod) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_PAYMENT_METHOD + paymentMethodId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(paymentMethod),
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

  createNewPaymentMethod: (paymentMethod) => {
    console.log(paymentMethod);
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_PAYMENT_METHOD, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(paymentMethod),
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

  deleteById: (paymentMethodId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.DELETE_PAYMENT_METHOD + paymentMethodId, {
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

export default PaymentMethodService;
