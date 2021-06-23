import React, {
    useContext, useState, useEffect
} from "react";
import { store } from "../appContext"

function Burger() {
    const { state, clicked } = useContext(store)
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

    const [itemInBasket, setItemInBasket] = useState(false)
    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        state.basketContents.map(b => {
            if (b.burger.name.includes(selectedBurger.name))
                setItemInBasket(true)

        })
    }, [state.basketContents, selectedBurger.name])

    return (
        <div className="burger">
            <div className="burger_top">
                <div className="burger_top-main">
                    <h1>{selectedBurger.name}</h1>
                    <section>
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
                    </section>
                    <h3>Ingredients:</h3>
                    <h4>{ingredientsList}</h4>
                    <button disabled={itemInBasket} onClick={(e) => { clicked(e, selectedBurger, 1) }}>{itemInBasket ? "ADDED TO BASKET!" : "ADD TO BASKET"}</button>
                </div>
                <div className="burger_top-cont">
                    <img src={`${process.env.PUBLIC_URL}${selectedBurger.imageUrl}`} alt="burger" />
                </div>
            </div>
            <div className="burger_bot">
                <div className="burger_bot_main">
                    <h1>Fresh Ingredients</h1>

                    <table id="customers">
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>potato buns</td>
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
