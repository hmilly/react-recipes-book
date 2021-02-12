import React from 'react'
import {
	Link
} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="nav">
            <li>
                <Link className="nav_link" to="/">ON THE MENU</Link>
            </li>
            <li>
                <Link className="nav_link" to="/menu">RECIPES</Link>
            </li>
            <li>WINE</li>
            <li>GIFTS</li>
            <li>MARKET</li>
            <li>
                <Link to="/basket">
                    <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
                </Link>
            </li>
        </ul>
    )
}

export default Nav