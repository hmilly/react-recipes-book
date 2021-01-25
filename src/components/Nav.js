import React from "react";


function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>ON THE MENU</li>
                <li>RECIPES</li>
                <li>WINE</li>
                <li>GIFTS</li>
                <li>MARKET</li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
        </div>
    )
}

export default Nav
