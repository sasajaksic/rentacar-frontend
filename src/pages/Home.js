import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const openVehiclesPage = () => {
    history.push("/vehicles");
  };

  return (
    <div>
      <main>
        <section
          className="clean-block clean-hero"
          style={{
            backgroundImage: `url("https://www.dahabshilbank.com/wp-content/uploads/2020/10/hyndai-finance.jpeg")`,
            backgroundPosition: "center",
            color: "rgba(9, 162, 255, 0.85)",
          }}
        >
          <div className="text">
            <h2>Rent a car</h2>
            <p>
              A rental car from our Rent a car is perfect for road trips,
              airport travel or to get around town over the weekend. Visit one
              of our many convenient car rental locations or rent a car at one
              of our airport locations.
            </p>
            <button
              className="btn btn-outline-light btn-lg"
              type="button"
              onClick={openVehiclesPage}
            >
              Vehicles
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
