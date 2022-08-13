import { useContext } from "react";
import store from "../context/appContext";

const CartItem = ({ b }) => {
  const { deleteFromBasket, clicked } = useContext(store);
  return (
    <div className="burger_in_cart">
      <header>
        <img
          src={`${process.env.PUBLIC_URL}${b.burger.imageUrl}`}
          alt="burger"
        />
      </header>
      <main>
        <p>{b.burger.name}</p>
        <div>
          <p>£{b.burger.price}</p>
          <select
            name="quantity"
            value={b.quantity}
            onChange={(e) => clicked(e, b.burger, e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
          <button onClick={(e) => deleteFromBasket(e, b.burger)}>X</button>
        </div>
      </main>
    </div>
  );
};

export default CartItem;
