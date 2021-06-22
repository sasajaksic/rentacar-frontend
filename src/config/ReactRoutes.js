const ReactRoutes = [];

ReactRoutes.HOME = "/";

//APPUSER
ReactRoutes.APPUSER = "/appusers";
ReactRoutes.ADD_UPDATE_APPUSER = "/AddUpdateAppuser/";

//VEHICLE
ReactRoutes.VEHICLE = "/vehicles";
ReactRoutes.ADD_UPDATE_VEHICLE = "/AddUpdateVehicle";
//VEHICLE DETAIL
ReactRoutes.VEHICLE_DETAIL = "/vehicle/vehicleDetails/:vehicleId";

//LOCATION
ReactRoutes.LOCATION = "/locations";
ReactRoutes.ADD_UPDATE_LOCATION = "/AddUpdateLocation/";

//RESERVATION
ReactRoutes.RESERVATION = "/reservations";
ReactRoutes.ADD_UPDATE_RESERVATION = "/AddUpdateReservation";
//USER RESERVATION
ReactRoutes.NEW_RESERVATION = "/newReservation/:vehicleId";

//PAYMENT METHOD
ReactRoutes.PAYMENT_METHOD = "/paymentMethods";
ReactRoutes.ADD_UPDATE_PAYMENT_METHOD = "/AddUpdatePaymentMethod";

//RENT
ReactRoutes.RENT = "/rents";
ReactRoutes.ADD_UPDATE_RENT = "/AddUpdateRent";

//DAMAGE
ReactRoutes.DAMAGE = "/damages";
ReactRoutes.ADD_UPDATE_DAMAGE = "/AddUpdateDamage";

//FINE
ReactRoutes.FINE = "/fines";
ReactRoutes.ADD_UPDATE_FINE = "/AddUpdateFine";

//REPORT
ReactRoutes.REPORT = "/reports";
ReactRoutes.ADD_UPDATE_REPORT = "/AddUpdateReport";

//LOGIN AND REGISTRATION
ReactRoutes.LOGIN = "/login";
ReactRoutes.SIGNUP = "/signup";

export default ReactRoutes;
