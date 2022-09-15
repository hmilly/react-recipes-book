import { useContext } from "react";
import AppContext from "../context/AppContext";
import CartItem from "../components/CartItem";
import UserForm from "../components/UserForm";
import Footer from "../components/Footer";

const Basket = () => {
  const { basket, totalPrice } = useContext(AppContext);

  return (
    <>
      <div className="basket">
        <UserForm />
        <div className="basket_receipt">
          <header>
            <h2>Basket</h2>
          </header>
          <main>
            {basket.length !== 0 ? (
              basket.map((b, i) => <CartItem b={b} key={i} />)
            ) : (
              <p>Nothing added to basket yet, please use the menu</p>
            )}
          </main>
          <section>
            <h3>Delivery Fee:</h3>
            <h3>£3</h3>
          </section>
          <footer>
            <h3>Total Price:</h3>
            <h3>£{totalPrice === 0 ? 0 : totalPrice + 3}</h3>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
