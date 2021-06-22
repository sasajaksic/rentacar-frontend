const ApiRoutes = [];

ApiRoutes.BASE_URL = "http://localhost:9064/";

//APPUSER
ApiRoutes.ALL_APPUSERS = ApiRoutes.BASE_URL + "appusers/";
ApiRoutes.APPUSER_BY_ID = ApiRoutes.BASE_URL + "appuser/";
ApiRoutes.APPUSER_BY_EMAIL = ApiRoutes.BASE_URL + "appuserEmail/";
ApiRoutes.LOGIN = ApiRoutes.BASE_URL + "login/";
ApiRoutes.LOGOUT = ApiRoutes.BASE_URL + "logout/";
ApiRoutes.NEW_APPUSER = ApiRoutes.BASE_URL + "appuser/";
ApiRoutes.UPDATE_APPUSER = ApiRoutes.BASE_URL + "appuser/";
ApiRoutes.DELETE_APPUSER = ApiRoutes.BASE_URL + "appuser/";

//VEHICLE
ApiRoutes.ALL_VEHICLES = ApiRoutes.BASE_URL + "vehicles/";
ApiRoutes.VEHICLE_BY_ID = ApiRoutes.BASE_URL + "vehicle/";
ApiRoutes.NEW_VEHICLE = ApiRoutes.BASE_URL + "vehicle/";
ApiRoutes.UPDATE_VEHICLE = ApiRoutes.BASE_URL + "vehicle/";
ApiRoutes.DELETE_VEHICLE = ApiRoutes.BASE_URL + "vehicle/";

//LOCATION
ApiRoutes.ALL_LOCATIONS = ApiRoutes.BASE_URL + "locations/";
ApiRoutes.LOCATION_BY_ID = ApiRoutes.BASE_URL + "location/";
ApiRoutes.NEW_LOCATION = ApiRoutes.BASE_URL + "location/";
ApiRoutes.UPDATE_LOCATION = ApiRoutes.BASE_URL + "location/";
ApiRoutes.DELETE_LOCATION = ApiRoutes.BASE_URL + "location/";

//RESERVATION
ApiRoutes.ALL_RESERVATIONS = ApiRoutes.BASE_URL + "reservations/";
ApiRoutes.RESERVATION_BY_ID = ApiRoutes.BASE_URL + "reservation/";
ApiRoutes.MY_RESERVATIONS = ApiRoutes.BASE_URL + "myReservations/";
ApiRoutes.NEW_RESERVATION = ApiRoutes.BASE_URL + "reservation/";
ApiRoutes.UPDATE_RESERVATION = ApiRoutes.BASE_URL + "reservation/";
ApiRoutes.DELETE_RESERVATION = ApiRoutes.BASE_URL + "reservation/";

//PAYMENT METHOD
ApiRoutes.ALL_PAYMENT_METHODS = ApiRoutes.BASE_URL + "paymentMethods/";
ApiRoutes.PAYMENT_METHOD_BY_ID = ApiRoutes.BASE_URL + "paymentMethod/";
ApiRoutes.NEW_PAYMENT_METHOD = ApiRoutes.BASE_URL + "paymentMethod/";
ApiRoutes.UPDATE_PAYMENT_METHOD = ApiRoutes.BASE_URL + "paymentMethod/";
ApiRoutes.DELETE_PAYMENT_METHOD = ApiRoutes.BASE_URL + "paymentMethod/";

//RENT
ApiRoutes.ALL_RENTS = ApiRoutes.BASE_URL + "rents/";
ApiRoutes.RENT_BY_ID = ApiRoutes.BASE_URL + "rent/";
ApiRoutes.NEW_RENT = ApiRoutes.BASE_URL + "rent/";
ApiRoutes.UPDATE_RENT = ApiRoutes.BASE_URL + "rent/";
ApiRoutes.DELETE_RENT = ApiRoutes.BASE_URL + "rent/";

//DAMAGE
ApiRoutes.ALL_DAMAGES = ApiRoutes.BASE_URL + "damages/";
ApiRoutes.DAMAGE_BY_ID = ApiRoutes.BASE_URL + "damage/";
ApiRoutes.NEW_DAMAGE = ApiRoutes.BASE_URL + "damage/";
ApiRoutes.UPDATE_DAMAGE = ApiRoutes.BASE_URL + "damage/";
ApiRoutes.DELETE_DAMAGE = ApiRoutes.BASE_URL + "damage/";

//FINE
ApiRoutes.ALL_FINES = ApiRoutes.BASE_URL + "fines/";
ApiRoutes.FINE_BY_ID = ApiRoutes.BASE_URL + "fine/";
ApiRoutes.NEW_FINE = ApiRoutes.BASE_URL + "fine/";
ApiRoutes.UPDATE_FINE = ApiRoutes.BASE_URL + "fine/";
ApiRoutes.DELETE_FINE = ApiRoutes.BASE_URL + "fine/";

//REPORT
ApiRoutes.ALL_REPORTS = ApiRoutes.BASE_URL + "reports/";
ApiRoutes.REPORT_BY_ID = ApiRoutes.BASE_URL + "report/";
ApiRoutes.NEW_REPORT = ApiRoutes.BASE_URL + "report/";
ApiRoutes.UPDATE_REPORT = ApiRoutes.BASE_URL + "report/";
ApiRoutes.DELETE_REPORT = ApiRoutes.BASE_URL + "report/";

export default ApiRoutes;
