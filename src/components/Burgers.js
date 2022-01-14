import { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../appContext";

const Burgers = ({ burgerObj }) => {
  const { setItem, clicked, deleteFromBasket, inBasket } = useContext(store);

  const p = burgerObj.ingredients.map((ing, i) =>
    i < burgerObj.ingredients.length - 1
      ? `${ing.split(": ")[1]}, `
      : `${ing.split(": ")[1]}.`
  );

  return (
    <div className="burger_card">
      <Link
        to={`/burger/${burgerObj.id}`}
        id="link"
        onClick={() => setItem("SETBURGER", burgerObj)}
      >
        <div className="burger_card_img">
          <img
            src={`${process.env.PUBLIC_URL}${burgerObj.imageUrl}`}
            alt={burgerObj.name}
          />
          <h3>{burgerObj.name}</h3>
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
                clicked(e, burgerObj, 1);
              }}
            >
              {"Add to basket"}
            </button>
            <p className="burger_card_num">{inBasket(burgerObj.name)}</p>
            <button
              onClick={(e) => {
                deleteFromBasket(e, burgerObj);
              }}
            >
              {"X"}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Burgers;
