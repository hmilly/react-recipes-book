import React, {
    useContext
} from "react";
import { store } from "../appContext"

function Burger() {
    const { state, clicked } = useContext(store)

    let ingredientsList
    let recipeTable
    if (state.selectedBurger) {
        ingredientsList = state.selectedBurger.ingredients.map((ing, j) =>
            j < state.selectedBurger.ingredients.length - 1
                ? `${ing.split(": ")[1]}, `
                : `${ing.split(": ")[1]}.`)

        recipeTable = state.selectedBurger.ingredients.map((i, j) =>
            <tr key={j}>
                <td>{i.slice((i.indexOf(":") + 1))}</td>
                <td>{i.slice(0, i.indexOf(":"))}</td>
            </tr>
        )
    }

    return (
        <div className="burger_elem">
            <div className="burger_elem_top">
                <div className="burger_elem_topl">
                    <p className="bacon-plant">{state.selectedBurger.name}</p>
                    <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                    <p>{state.selectedBurger.prepTime}</p>
                    <div className="topl_div">
                        <img src={`${process.env.PUBLIC_URL}/assets/ute.png`} alt="cutlery" />
                        <p>2 servings</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/apple.png`} alt="apple" />
                        <p>820 cals/serving</p>
                    </div>
                    <p>{ingredientsList}</p>
                    <button onClick={(e) => { clicked(e, state.selectedBurger, 1) }}>ADD TO BASKET</button>
                </div>
                <div className="burger_elem_topr">
                    <img src={`${process.env.PUBLIC_URL}${state.selectedBurger.imageUrl}`} alt="burger" />
                </div>
            </div>
            <div className="burger_elem_bot">
                <div className="burger_elem_bot_container">
                    <div className="burger_elem_bot_container_top">
                        <h5>fresh</h5>
                        <p>ingredients</p>
                    </div>
                    <div className="burger_elem_bot_container_bot">
                        <table id="customers">
                            <tbody>
                                <tr>
                                    <td>potato buns</td>
                                    <td>2</td>
                                </tr>
                                {recipeTable}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger
