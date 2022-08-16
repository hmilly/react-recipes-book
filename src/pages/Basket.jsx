import { useContext } from "react";
import store from "../context/appContext";
import CartItem from "../components/CartItem";
import UserForm from "../components/UserForm";
import Footer from "../components/Footer";

const Basket = () => {
  const { basket, totalPrice } = useContext(store);

  const getTotal = (t) => {
    if (t === 0) return 0;
    else if (!Number.isInteger(t)) return (t + 3).toString().concat("0");
    else return t + 3;
  };

  return (
    <>
      <div className="order_page">
        <UserForm />
        <div className="order_page_receipt">
          <header>
            <h1>Basket</h1>
          </header>
          <main>
            {basket.length !== 0 ? (
              basket.map((b) => <CartItem b={b} key={b.name} />)
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
            <h3>£{getTotal(totalPrice)}</h3>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Basket;
