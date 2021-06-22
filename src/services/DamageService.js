import ApiRoutes from "../config/ApiRoutes";

const DamageService = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.ALL_DAMAGES)
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

  getById: (damageId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.DAMAGE_BY_ID + damageId)
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

  updateDamage: (damageId, damage) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.UPDATE_DAMAGE + damageId, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(damage),
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

  createNewDamage: (damage) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.NEW_DAMAGE, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(damage),
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

  deleteById: (damageId) => {
    return new Promise((resolve, reject) => {
      fetch(ApiRoutes.DAMAGE_BY_ID + damageId, {
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

export default DamageService;
