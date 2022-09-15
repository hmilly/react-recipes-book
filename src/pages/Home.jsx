import Header from "../components/Header";
import SpecialOffer from "../components/SpecialOffer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <div>
          <section>
            <img
              className="burger-bg-1"
              src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`}
              alt="burger_logo"
            />
            <h2>Choose your meals</h2>
            <p>
              Our chef-designed recipes include balanced Medditerranean meals,
              quick one-pan dinners, and top-rated customer favourites.
            </p>
            <img
              className="burger-bg-2"
              src={`${process.env.PUBLIC_URL}/assets/maingbg2.png`}
              alt="burger_logo"
            />
          </section>
          <img
            className="burger-img"
            src={`${process.env.PUBLIC_URL}/assets/main1.png`}
            alt="burger"
          />
        </div>
        <div>
          <section>
            <img
              className="burger-bg-1"
              src={`${process.env.PUBLIC_URL}/assets/maingbg3.png`}
              alt="burger logo"
            />
            <h2>Unpack your box</h2>
            <p>
              We guarentee the freshness of all our ingredients and deliver them
              in an insulated box right to your door.
            </p>
            <img
              className="burger-bg-2"
              src={`${process.env.PUBLIC_URL}/assets/maingbg4.png`}
              alt="burger logo"
            />
          </section>
          <img
            className="burger-img"
            src={`${process.env.PUBLIC_URL}/assets/main2.png`}
            alt="shopping_img"
          />
        </div>
        <div>
          <section>
            <img
              className="burger-bg-1"
              src={`${process.env.PUBLIC_URL}/assets/maingbg5.png`}
              alt="burger logo"
            />
            <h2>Create magic</h2>
            <p>
              Following our step-by-step instructions you'll experience the
              magic of cooking recipes that our chefs create with your family's
              tastes in mind.
            </p>
            <img
              className="burger-bg-2"
              src={`${process.env.PUBLIC_URL}/assets/maingbg6.png`}
              alt="burger logo"
            />
          </section>
          <img
            className="burger-img"
            src={`${process.env.PUBLIC_URL}/assets/7.png`}
            alt="burger"
          />
        </div>
      </main>
      <SpecialOffer />
      <Footer />
    </>
  );
};

export default Home;
