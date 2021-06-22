import { useHistory } from "react-router-dom";

const Product = ({ vehicle, appuser }) => {
  const history = useHistory();

  const openVehiclePage = () => {
    history.push("/vehicle/vehicleDetails/" + vehicle.id);
  };

  const renderImage = (vehicle) => {
    if (vehicle.image) {
      // eslint-disable-next-line jsx-a11y/alt-text
      return <img className="img-fluid d-block mx-auto" src={vehicle.image} />;
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          className="img-fluid d-block mx-auto"
          src="https://restorankomuna.rs/wp-content/uploads/2020/10/nocontentyet.jpg"
        />
      );
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="clean-product-item">
        <div style={{ cursor: "pointer" }} onClick={openVehiclePage}>
          <div className="image">{renderImage(vehicle)}</div>
          <div className="product-name">
            <span className="font-weight-bold">
              {vehicle.brand} {vehicle.model} {vehicle.productionYear}
            </span>
          </div>
          <div className="price">
            <h3>${vehicle.price} / day</h3>
          </div>
          <div className="about">
            <p>
              Type: {vehicle.type} <br />
              Seat number: {vehicle.seatNumber} <br />
              Geatbox: {vehicle.gearbox} <br />
              Fuel: {vehicle.fuel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
