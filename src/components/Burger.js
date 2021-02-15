import React, { useContext } from "react";
import {
    Route,
    Link,
} from "react-router-dom";
import AppContext from "./context/appContext"

function Burger({ imageUrl, name, ingredients, prepTime, b }) {
    const { setBurger } = useContext(AppContext)

    //	const [state, dispatch] = useReducer(reducer, initialState)

    const clicked = (e, b) => {
        e.preventDefault();
        console.log(b)
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
                        <button className="add_btn" onClick={(e) => clicked(e, b)}>Add to basket</button>
                    </div>
                </div>
            </Link>
            <Route path="/burgerCard" />
        </div>
    )
}

export default Burger







