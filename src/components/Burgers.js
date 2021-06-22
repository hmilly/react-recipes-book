import React, { useContext, useState, useEffect } from "react";
import { Route, Link, } from "react-router-dom";
import { store } from "../appContext"

function Burgers({ burgerObj }) {
    const { state, setItem, clicked } = useContext(store)

    const [itemInBasket, setItemInBasket] = useState(false)
    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        state.basketContents.map(b => {
            if (b.burger.name.includes(burgerObj.name))
                setItemInBasket(true)
        })
    }, [state.basketContents, burgerObj])

    const p = burgerObj.ingredients.map((ing, i) =>
        i < burgerObj.ingredients.length - 1
            ? `${ing.split(": ")[1]}, `
            : `${ing.split(": ")[1]}.`)

    return (
        <div className="burger_card">
            <Link to="/burgerCard" id="link" onClick={() => setItem("SETBURGER", burgerObj)}>
                <div className="burger_card_img">
                    <img src={burgerObj.imageUrl} alt={burgerObj.name} />
                    <p>{burgerObj.name}</p>
                </div>
                <div className="burger_card_txt">
                    <p>{p}</p>
                    <div>
                        <img src="/assets/clock.png" alt="clock" />
                        <p>{burgerObj.prepTime}</p>
                    </div>
                    <div>
                        <button className="add_btn" disabled={itemInBasket} onClick={(e) => clicked(e, burgerObj, 1)}>{itemInBasket ? "Added to basket" : "Add to basket"}</button>
                    </div>
                </div>
            </Link>
            <Route path="/burgerCard" />
        </div>
    )
}

export default Burgers







