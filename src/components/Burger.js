import { useContext, useEffect } from "react";
import { store } from "../appContext";

const Burger = () => {
  const { state, clicked, deleteFromBasket, inBasket } = useContext(store);
  const selectedBurger = state.selectedBurger;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const setIngredients = (burger) => {
    return burger.ingredients.map((ing, i) =>
      i < burger.ingredients.length - 1
        ? `${ing.split(": ")[1]}, `
        : `${ing.split(": ")[1]}.`
    );
  };

  const setRecipe = (burger) => {
    return burger.ingredients.map((ing, i) => (
      <tr key={i}>
        <td>{ing.slice(0, ing.indexOf(":"))}</td>
        <td>{ing.slice(ing.indexOf(":") + 1)}</td>
      </tr>
    ));
  };

  return (
    <div className="burger">
      <div className="burger_top">
        <div className="burger_top-info">
          <h1>{selectedBurger.name}</h1>
          <aside>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/clock.png`}
                alt="clock"
              />
              <p>{selectedBurger.prepTime}</p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/ute.png`}
                alt="cutlery"
              />
              <p>2 servings</p>
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/apple.png`}
                alt="apple"
              />
              <p>820 cals/serving</p>
            </div>
          </aside>
          <h3>Ingredients:</h3>
          <h5>{setIngredients(selectedBurger)}</h5>
          <h5>£{selectedBurger.price}</h5>
          <div className="btns">
            <button
              onClick={(e) => {
                clicked(e, selectedBurger, 1);
              }}
            >
              {"Add to basket"}
            </button>
            <h4>{inBasket(selectedBurger.name)}</h4>
            <button
              onClick={(e) => {
                deleteFromBasket(e, selectedBurger);
              }}
            >
              {"X"}
            </button>
          </div>
        </div>
        <img
          className="burger_top-img"
          src={`${process.env.PUBLIC_URL}${selectedBurger.imageUrl}`}
          alt="burger"
        />
      </div>
      <div className="burger_bot">
        <div className="burger_bot_main">
          <h1>Fresh Ingredients</h1>
          <table id="customers">
            <tbody>
              <tr>
                <td>2</td>
                <td>Potato buns</td>
              </tr>
              {setRecipe(selectedBurger)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Burger;
