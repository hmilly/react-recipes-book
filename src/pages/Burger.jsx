import { useContext, useEffect } from "react";
import store from "../context/appContext";
import { useParams } from "react-router-dom";

const Burger = () => {
  const params = useParams();
  const { getBurger, burger, loading, clicked, deleteFromBasket, inBasket } =
    useContext(store);

  useEffect(() => {
    getBurger(parseInt(params.id));
  }, [params.id]);

  if (loading) {
    return (
      <main className="burger">
        <div className="loading">
          <img
            
            src={`${process.env.PUBLIC_URL}/assets/spinner.gif`}
          ></img>
        </div>
      </main>
    );
  } else {
    return (
      <main className="burger">
        <div className="burger_top">
          <aside>
            <h1>{burger.name}</h1>
            <ul>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/clock.png`}
                  alt="clock"
                />
                <p>{burger.prepTime}</p>
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/ute.png`}
                  alt="cutlery"
                />
                <p>2 servings</p>
              </li>
              <li>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/apple.png`}
                  alt="apple"
                />
                <p>820 cals/serving</p>
              </li>
            </ul>
            <h2>Ingredients:</h2>
            <p>
              {burger.ingredients.map((ing, i) =>
                i < burger.ingredients.length - 1
                  ? `${ing.split(": ")[1]}, `
                  : `${ing.split(": ")[1]}.`
              )}
            </p>
            <p>£{burger.price}</p>
            <div className="btns">
              <button
                onClick={(e) => {
                  clicked(e, burger, 1);
                }}
              >
                {"Add to basket"}
              </button>
              <h4>{inBasket(burger.name)}</h4>
              <button
                onClick={(e) => {
                  deleteFromBasket(e, burger);
                }}
              >
                {"X"}
              </button>
            </div>
          </aside>
          <img
            className="burger_main-img"
            src={`${process.env.PUBLIC_URL}${burger.imageUrl}`}
            alt="burger"
          />
        </div>

        <div className="burger_bot">
          <aside>
            <h1>Fresh Ingredients</h1>
            <table id="customers">
              <tbody>
                <tr>
                  <td>2</td>
                  <td>Potato buns</td>
                </tr>
                {burger.ingredients.map((ing, i) => (
                  <tr key={i}>
                    <td>{ing.slice(0, ing.indexOf(":"))}</td>
                    <td>{ing.slice(ing.indexOf(":") + 1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </aside>
        </div>
      </main>
    );
  }
};

export default Burger;