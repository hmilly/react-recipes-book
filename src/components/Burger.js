import React, {
    useContext
} from "react";
import { store } from "../appContext"

function Burger() {
    const { state, clicked, deleteFromBasket } = useContext(store)
    const selectedBurger = state.selectedBurger

    let ingredientsList
    let recipeTable
    if (selectedBurger) {
        ingredientsList = selectedBurger.ingredients.map((ing, i) =>
            i < selectedBurger.ingredients.length - 1
                ? `${ing.split(": ")[1]}, `
                : `${ing.split(": ")[1]}.`)

        recipeTable = selectedBurger.ingredients.map((ing, i) =>
            <tr key={i}>
                <td>{ing.slice(0, ing.indexOf(":"))}</td>
                <td>{ing.slice((ing.indexOf(":") + 1))}</td>
            </tr>
        )
    }

    return (
        <div className="burger">
            <div className="burger_top">
                <div className="burger_top-info">
                    <h1>{selectedBurger.name}</h1>
                    <aside>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                            <p>{selectedBurger.prepTime}</p>
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/ute.png`} alt="cutlery" />
                            <p>2 servings</p>
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/assets/apple.png`} alt="apple" />
                            <p>820 cals/serving</p>
                        </div>
                    </aside>
                    <h3>Ingredients:</h3>
                    <h5>{ingredientsList}</h5>
                    <h5>£{selectedBurger.price}</h5>
                    <div>
                        <button onClick={(e) => { clicked(e, selectedBurger, 1) }}>{"Add 1 to basket"}</button>
                        <button onClick={(e) => { deleteFromBasket(e, selectedBurger) }}>{"X"}</button>
                    </div>

                </div>
                <img className="burger_top-img" src={`${process.env.PUBLIC_URL}${selectedBurger.imageUrl}`} alt="burger" />
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
                            {recipeTable}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Burger
