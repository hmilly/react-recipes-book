import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../appContext"

const Nav = () => {
    const { state } = useContext(store)

    const [q, setQ] = useState(0)

    useEffect(() => {
        const num = state.basketContents.reduce((tot, curVal) => {
            return tot + curVal.quantity
        }, 0);
        setQ(num)
    }, [state.basketContents])

    return (
        <div className="nav">
            <ul>
                <li className="animate">
                    <Link to="/">HOME</Link>
                </li>
                <li className="animate">
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <button>WINE</button>
                </li>
                <li>
                    <button>GIFTS</button>
                </li>
                <li>
                    <button>MARKET</button>
                </li>
                <li className="animate basket">
                    <Link to="/basket">
                        <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
                        <h3>{q}</h3>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav