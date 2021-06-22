const LoggedUserService = {
  getHeadersForRequest: function () {
    let userFromLocalStorage = localStorage.getItem("appuser");

    if (userFromLocalStorage === null) {
      return null;
    }

    userFromLocalStorage = JSON.parse(userFromLocalStorage);

    return {
      email: userFromLocalStorage.email,
      password: userFromLocalStorage.password,
    };
  },

  isUserLoggedIn: function () {
    let userFromLocalStorage = localStorage.getItem("appuser");

    if (userFromLocalStorage === null) {
      return false;
    }

    userFromLocalStorage = JSON.parse(userFromLocalStorage);

    if (userFromLocalStorage.role !== 0) {
      return false;
    }

    return true;
  },

  isManagerLoggedIn: function () {
    let userFromLocalStorage = localStorage.getItem("appuser");

    if (userFromLocalStorage === null) {
      return false;
    }

    userFromLocalStorage = JSON.parse(userFromLocalStorage);

    if (userFromLocalStorage.role !== 1) {
      return false;
    }

    return true;
  },

  getUserName: function () {
    let userFromLocalStorage = localStorage.getItem("appuser");

    if (userFromLocalStorage === null) {
      return null;
    }

    userFromLocalStorage = JSON.parse(userFromLocalStorage);

    return userFromLocalStorage.firstName + " " + userFromLocalStorage.lastName;
  },

  getUserId: function () {
    let userFromLocalStorage = localStorage.getItem("appuser");

    if (userFromLocalStorage === null) {
      return null;
    }

    userFromLocalStorage = JSON.parse(userFromLocalStorage);

    return userFromLocalStorage.id;
  },
};

export default LoggedUserService;
