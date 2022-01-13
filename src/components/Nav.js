import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../appContext";

const Nav = () => {
  const { state } = useContext(store);
  const [q, setQ] = useState(0);

  useEffect(() => {
    const num = state.basketContents.reduce((tot, curVal) => {
      return tot + curVal.quantity;
    }, 0);
    setQ(num);
  }, [state.basketContents]);

  return (
    <nav>
      <ul>
        <li className="animate">
          <Link to="/recipes-book">HOME</Link>
        </li>
        <li className="animate">
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
        <li className="animate basket">
          <Link to="/basket">
            <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
            <h3>{q}</h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
