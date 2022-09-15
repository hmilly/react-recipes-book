import { useContext, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Nav = () => {
  const { basket } = useContext(AppContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const num = basket.reduce((tot, curVal) => tot + curVal.quantity, 0);
    setQuantity(num);
  }, [basket]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/recipe-book">HOME</Link>
        </li>
        <li>
          <Link to="/menu">MENU</Link>
        </li>
        <li>
          <Link to="/menu">WINE</Link>
        </li>
        <li>
          <Link to="/menu">GIFTS</Link>
        </li>
        <li>
          <Link to="/menu">MARKET</Link>
        </li>
        <li className="basket">
          <Link to="/basket">
            <FaShoppingCart alt="cart" />
            <p>{quantity}</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
