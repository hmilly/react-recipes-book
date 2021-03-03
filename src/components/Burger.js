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
                <td>{ing.slice((ing.indexOf(":") + 1))}</td>
                <td>{ing.slice(0, ing.indexOf(":"))}</td>
            </tr>
        )
    }

    const [itemInBasket, setItemInBasket] = useState(false)
    useEffect(() => {
        state.basketContents.map(b => {
            if (b.burger.name.includes(selectedBurger.name))
                setItemInBasket(true)

        })
    }, [state.basketContents, selectedBurger.name])

    return (
        <div className="burger_elem">
            <div className="burger_elem_top">
                <div className="burger_elem_topl">
                    <p className="bacon-plant">{selectedBurger.name}</p>
                    <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                    <p>{selectedBurger.prepTime}</p>
                    <div className="topl_div">
                        <img src={`${process.env.PUBLIC_URL}/assets/ute.png`} alt="cutlery" />
                        <p>2 servings</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/apple.png`} alt="apple" />
                        <p>820 cals/serving</p>
                    </div>
                    <p>{!ingredientsList}</p>
                    <button disabled={itemInBasket} onClick={(e) => { clicked(e, selectedBurger, 1) }}>{itemInBasket ? "ADDED TO BASKET!" : "ADD TO BASKET"}</button>
                </div>
                <div className="burger_elem_topr">
                    <img src={`${process.env.PUBLIC_URL}${selectedBurger.imageUrl}`} alt="burger" />
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
                                {!recipeTable}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Burger
