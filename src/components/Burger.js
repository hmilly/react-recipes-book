import React from "react";
import OrderPage from "./OrderPage";

function Burger({ imageUrl, name, ingredients, prepTime, b }) {


    const clicked = (e, b) => {
        e.preventDefault();
        console.log(b)
    }


    return (
        <div className="menu_burger_card">
            <div className="burger_card_img">
                <img src={imageUrl} alt={name} />
                <p>{name}</p>
            </div>
            <div className="burger_card_txt">
                <p>{ingredients.map((ing, j) => j < ingredients.length - 1 ? `${ing}, ` : `${ing}.`)}</p>
                <div>
                    <img src="/assets/clock.png" alt="clock" />
                    <p>{prepTime}</p>
                </div>
                <div>
                 <button className="add_btn" onClick={(e) => clicked(e, b)}>Add to basket</button>

                </div>
                
            </div>
        </div>
    )
}

export default Burger







