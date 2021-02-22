import React, { useContext } from "react";
import {
    Route,
    Link,
} from "react-router-dom";
import { store } from "../appContext"

function Burger({ imageUrl, name, ingredients, prepTime, b }) {
    const { state, setBurger, addToBasket } = useContext(store)

    //	const [state, dispatch] = useReducer(reducer, initialState)

    const clicked = (e) => {
        e.preventDefault();
        addToBasket(b)
        console.log(state.basketContents)
    }

    const p = ingredients.map((ing, j) =>
        j < ingredients.length - 1
            ? `${ing.split(": ")[1]}, `
            : `${ing.split(": ")[1]}.`)

    return (
        <div className="menu_burger_card">
            <Link to="/burgerCard" id="link" onClick={() => setBurger(b)}>
                <div className="burger_card_img">
                    <img src={imageUrl} alt={name} />
                    <p>{name}</p>
                </div>
                <div className="burger_card_txt">
                    <p>{p}</p>
                    <div>
                        <img src="/assets/clock.png" alt="clock" />
                        <p>{prepTime}</p>
                    </div>
                    <div>
                        <button className="add_btn" onClick={(e) => clicked(e)}>Add to basket</button>
                    </div>
                </div>
            </Link>
            <Route path="/burgerCard" />
        </div>
    )
}

export default Burger







