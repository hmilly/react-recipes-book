import React from 'react'
import {
    Link
} from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
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
                <li>
                    <Link to="/basket">
                        <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav