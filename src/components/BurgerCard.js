import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import AppContext from "../context/AppContext";

const BurgerCard = ({ burgerObj }) => {
  const { addToBasket, deleteFromBasket, findInBasket } =
    useContext(AppContext);

  const basketItem = findInBasket(burgerObj.name);

  const p = burgerObj.ingredients.map((ing, i) =>
    i < burgerObj.ingredients.length - 1
      ? `${ing.split(": ")[1]}, `
      : `${ing.split(": ")[1]}.`
  );

  return (
    <div className="burger_card">
      <Link to={`/menu/${burgerObj.id}`} id="link">
        <div className="burger_card_img">
          <img
            src={`${process.env.PUBLIC_URL}${burgerObj.imageUrl}`}
            alt={burgerObj.name}
          />
          <h4>{burgerObj.name}</h4>
        </div>
        <div className="burger_card_info">
          <p>{p}</p>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/clock.png`}
              alt="clock"
            />
            <p>{burgerObj.prepTime}</p>
            <p>£{burgerObj.price}</p>
          </div>
          <div>
            <button
              onClick={(e) => {
                addToBasket(e, burgerObj, 1);
              }}
            >
              {"Add to basket"}
            </button>
            <p className="burger_card_num">
              {basketItem ? basketItem.quantity : 0}
            </p>
            <button
              onClick={(e) => {
                deleteFromBasket(e, burgerObj);
              }}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BurgerCard;
