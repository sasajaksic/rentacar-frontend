import { Switch, Route } from "react-router-dom";
import ReactRoutes from "./config/ReactRoutes";
import Home from "./pages/Home";
import Vehicle from "./pages/Vehicle";
import Location from "./pages/Location";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import VehicleDetal from "./pages/VehicleDetal";
import AddUpdateReservation from "./pages/AddUpdate/AddUpdateReservation";
import AddUpdateVehicle from "./pages/AddUpdate/AddUpdateVehicle";
import AddUpdateLocation from "./pages/AddUpdate/AddUpdateLocation";
import AddUpdateRent from "./pages/AddUpdate/AddUpdateRent";
import AddUpdatePaymentMethod from "./pages/AddUpdate/AddUpdatePaymentMethod";
import AddUpdateDamage from "./pages/AddUpdate/AddUpdateDamage";
import AddUpdateFine from "./pages/AddUpdate/AddUpdateFine";
import AddUpdateReport from "./pages/AddUpdate/AddUpdateReport";
import NewReservation from "./pages/NewReservation";
import Appuser from "./pages/Appuser";
import Rent from "./pages/Rent";
import PaymentMethod from "./pages/PaymentMethod";
import Damage from "./pages/Damage";
import Fine from "./pages/Fine";
import Report from "./pages/Report";
import AddUpdateAppuser from "./pages/AddUpdate/AddUpdateAppuser";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path={ReactRoutes.HOME} component={Home} />

        <Route path={ReactRoutes.APPUSER} component={Appuser} />
        <Route
          path={ReactRoutes.ADD_UPDATE_APPUSER}
          component={AddUpdateAppuser}
        />

        <Route path={ReactRoutes.VEHICLE} component={Vehicle} />
        <Route
          path={ReactRoutes.ADD_UPDATE_VEHICLE}
          component={AddUpdateVehicle}
        />

        <Route path={ReactRoutes.LOCATION} component={Location} />
        <Route
          path={ReactRoutes.ADD_UPDATE_LOCATION}
          component={AddUpdateLocation}
        />

        <Route path={ReactRoutes.RESERVATION} component={Reservation} />
        <Route path={ReactRoutes.NEW_RESERVATION} component={NewReservation} />
        <Route
          path={ReactRoutes.ADD_UPDATE_RESERVATION}
          component={AddUpdateReservation}
        />

        <Route path={ReactRoutes.RENT} component={Rent} />
        <Route path={ReactRoutes.ADD_UPDATE_RENT} component={AddUpdateRent} />

        <Route path={ReactRoutes.PAYMENT_METHOD} component={PaymentMethod} />
        <Route
          path={ReactRoutes.ADD_UPDATE_PAYMENT_METHOD}
          component={AddUpdatePaymentMethod}
        />

        <Route path={ReactRoutes.DAMAGE} component={Damage} />
        <Route
          path={ReactRoutes.ADD_UPDATE_DAMAGE}
          component={AddUpdateDamage}
        />

        <Route path={ReactRoutes.FINE} component={Fine} />
        <Route path={ReactRoutes.ADD_UPDATE_FINE} component={AddUpdateFine} />

        <Route path={ReactRoutes.REPORT} component={Report} />
        <Route
          path={ReactRoutes.ADD_UPDATE_REPORT}
          component={AddUpdateReport}
        />

        <Route path={ReactRoutes.VEHICLE_DETAIL} component={VehicleDetal} />

        <Route path={ReactRoutes.LOGIN} component={Login} />
        <Route path={ReactRoutes.SIGNUP} component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
