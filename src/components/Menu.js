import React, { useState, useEffect } from "react";


function Menu() {

    const [burgers, setBurgers] = useState([])

    useEffect(() => {
        const getBurgers = async () => {
            await fetch('db.json')
                .then(res => res.json())
                .then(res => setBurgers(res.burgers))
                .catch((error) => console.log(error));
        }
        getBurgers()
    }, [])


    const seeMore = (e) => {
        const btn = document.querySelector(".onclickBtn");
        btn.setAttribute("disabled", true)
        const menuMid = document.querySelector(".menu_mid")

        burgers.map((b, i) =>
            i >= 9 ?
                menuMid.innerHTML += `<div class="menu_burger_card" key=${i}>
                    <div class="burger_card_img">
                        <img src=${b.imageUrl} alt=${b.name} />
                        <p>${b.name}</p>
                    </div>
                    <div class="burger_card_txt">
                        <p>${b.ingredients.map((ing, j) => j < b.ingredients.length - 1 ? ` ${ing}` : ` ${ing}.`)} </p>
                        <img src="/assets/clock.png" alt="clock" />
                        <p>${b.prepTime}</p>
                        <button>Add to basket</button>
                    </div>
                </div>`
                : null
        )
    }

    const burgerCards = burgers.map((b, i) =>
    i < 9 ?
        <div className="menu_burger_card" key={i}>
            <div className="burger_card_img">
                <img src={b.imageUrl} alt={b.name} />
                <p>{b.name}</p>
            </div>
            <div className="burger_card_txt">
                <p>{b.ingredients.map((ing, j) => j < b.ingredients.length - 1 ? `${ing}, ` : `${ing}.`)}</p>
                <img src="/assets/clock.png" alt="clock" />
                <p>{b.prepTime}</p>
                <button>Add to basket</button>
            </div>
        </div>
        : null
)


    return (
        <div className="menu">
            <div className="menu_top">
                <h1>Explore our Menus</h1>
                <p>Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
              Approved, Diabetes Friendly recipes and health-conscious offerings.</p>
            </div>
            <div className="menu_mid">

                {burgerCards}

            </div>
            <div className="menu_bot">
                <button className="onclickBtn" onClick={(e) => seeMore(e)}>SEE MORE</button>
            </div>
        </div>
    )
}

export default Menu
