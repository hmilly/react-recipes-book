import { useContext } from "react";
import { store } from "../appContext";
import CartItem from "./CartItem";
import UserForm from "./UserForm";

const OrderPage = () => {
  const { state, totalPrice } = useContext(store);

  const getTotal = (t) => {
    if (t === 0) return 0;
    else if (!Number.isInteger(t)) return (t + 3).toString().concat("0");
    else return t + 3;
  };

  return (
    <div className="order_page">
      <UserForm />
      <div className="order_page_receipt">
        <div className="receipt_top">
          <h1>Basket</h1>
        </div>
        <div className="receipt_main">
          {state.basketContents.length !== 0 ? (
            state.basketContents.map((b) => <CartItem b={b} key={b.name} />)
          ) : (
            <p>Nothing added to basket yet, please use the menu</p>
          )}
        </div>

        <div className="receipt_delivery">
          <h3>Delivery Fee:</h3>
          <h3>£3</h3>
        </div>
        <div className="receipt_total">
          <h3>Total Price:</h3>
          <h3>£{getTotal(totalPrice)}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
