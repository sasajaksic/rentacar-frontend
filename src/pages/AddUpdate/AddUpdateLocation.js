import React, { useEffect, useState } from "react";
import LocationForm from "../../components/Form/LocationForm";
import Heading from "../../components/Heading/Heading";
import { useLocation, useHistory } from "react-router-dom";
import LocationService from "../../services/LocationService";

const AddUpdateLocation = () => {
  const history = useHistory();
  const search = useLocation().search;
  const locationId = new URLSearchParams(search).get("locationId");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (locationId) {
      LocationService.getById(locationId)
        .then(setLocation)
        .catch(console.error);
    }
  }, [locationId]);

  const receiveLocation = (location) => {
    if (locationId) {
      LocationService.updateLocation(locationId, location).then((data) => {
        history.push("/locations");
      });
    } else {
      LocationService.createNewLocation(location).then((data) => {
        history.push("/locations");
      });
    }
  };

  return (
    <div>
      <main className="page product-page">
        <section className="clean-block clean-product dark">
          <div className="container">
            <Heading
              title={"New location"}
              description={"Enter new location information: "}
            />

            <div className="block-content">
              <div className="product-info">
                <LocationForm
                  location={location}
                  sendLocation={receiveLocation}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddUpdateLocation;
