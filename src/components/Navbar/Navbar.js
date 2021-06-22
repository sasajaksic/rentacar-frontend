import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ReactRoutes from "../../config/ReactRoutes";
import LoggedUserService from "../../services/LoggedUserService";
import AppuserService from "../../services/AppuserService";

const Navbar = () => {
  const [isNavbarOpen, setIsNavBarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavBarOpen(false);
  }, [location.pathname]);

  const toggleNavbar = () => setIsNavBarOpen(!isNavbarOpen);

  const logout = () => {
    AppuserService.logOut();
  };

  const renderClient = () => {
    return (
      <ul className="nav navbar-nav ml-auto">
        <li role="presentation" className="nav-item">
          <Link to={ReactRoutes.VEHICLE} className="nav-link">
            Vehicles
          </Link>
        </li>
        <li role="presentation" className="nav-item">
          <Link to={ReactRoutes.LOCATION} className="nav-link">
            Locations
          </Link>
        </li>
        <li role="presentation" className="nav-item">
          <Link to={ReactRoutes.RESERVATION} className="nav-link">
            Reservations
          </Link>
        </li>
        <li role="presentation" className="nav-item">
          <Link to="" onClick={() => logout()} className="nav-link">
            Logout
          </Link>
        </li>
      </ul>
    );
  };

  const renderGuest = () => {
    return (
      <ul className="nav navbar-nav ml-auto">
        <li role="presentation" className="nav-item">
          <Link to={ReactRoutes.VEHICLE} className="nav-link">
            Vehicles
          </Link>
        </li>
        <li role="presentation" className="nav-item">
          <Link to={ReactRoutes.LOCATION} className="nav-link">
            Locations
          </Link>
        </li>
        <li role="presentation" className="nav-item">
          <Link to={ReactRoutes.SIGNUP} className="nav-link">
            Sign up
          </Link>
        </li>
        <li role="presentation" className="nav-item">
          <Link to={ReactRoutes.LOGIN} className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );
  };

  const renderAdmin = () => {
    return (
      <div>
        <ul className="nav navbar-nav ml-auto">
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.APPUSER} className="nav-link">
              Appusers
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.LOCATION} className="nav-link">
              Locations
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.VEHICLE} className="nav-link">
              Vehicles
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.RESERVATION} className="nav-link">
              Reservations
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.RENT} className="nav-link">
              Rents
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.PAYMENT_METHOD} className="nav-link">
              Payment Methods
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.DAMAGE} className="nav-link">
              Damages
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.FINE} className="nav-link">
              Fines
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to={ReactRoutes.REPORT} className="nav-link">
              Reports
            </Link>
          </li>
          <li role="presentation" className="nav-item">
            <Link to="" onClick={() => logout()} className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to={ReactRoutes.HOME} className="navbar-brand logo">
            Rent a Car
          </Link>
          <button onClick={toggleNavbar} className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              "collapse navbar-collapse flex-lg-grow-0" +
              (isNavbarOpen ? " show" : "")
            }
          >
            {LoggedUserService.isManagerLoggedIn()
              ? renderAdmin()
              : LoggedUserService.isUserLoggedIn()
              ? renderClient()
              : renderGuest()}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
