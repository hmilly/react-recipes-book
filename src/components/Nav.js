import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import store from "../context/appContext";

const Nav = () => {
  const { basket } = useContext(store);
  const [q, setQ] = useState(0);

  useEffect(() => {
    const num = basket.reduce((tot, curVal) => {
      return tot + curVal.quantity;
    }, 0);
    setQ(num);
  }, [basket]);

  return (
    <nav>
      <ul>
        <li >
          <Link to="/recipe-book">HOME</Link>
        </li>
        <li >
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
            <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
            <p>{q}</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
