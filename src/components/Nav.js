import React from 'react'
import {
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">ON THE MENU</Link>
            <Link to="/menu">RECIPES</Link>
            <Link>WINE</Link>
            <Link>GIFTS</Link>
            <Link>MARKET</Link>
            <Link to="/basket">
                <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
            </Link>
        </div>
    )
}

export default Nav