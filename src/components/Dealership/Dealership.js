const Dealership = ({ location }) => {
  const renderImage = (location) => {
    if (location.image) {
      // eslint-disable-next-line jsx-a11y/alt-text
      return <img className="img-fluid d-block mx-auto" src={location.image} />;
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
    <div className="col-md-6 col-lg-4">
      <div className="card">
        <div className="image">{renderImage(location)}</div>
        <div className="card-body">
          <h4 className="card-title">
            {location.city} {location.street} {location.number}
          </h4>
          <p className="card-text">
            This great dealership is located at {location.street},{" "}
            {location.number} in {location.city}. Select yor vehicle and pick it
            up here!
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dealership;
