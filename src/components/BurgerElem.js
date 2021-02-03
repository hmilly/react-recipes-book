import React from "react";

function BurgerElem() {
    return (
        <div className="burger_elem">
            <div className="burger_elem_top">
                <div className="burger_elem_topl">
                    <p className="bacon-plant">bacon plant</p>
                    <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                    <p>55 min</p>
                    <div className="topl_div">
                        <img src={`${process.env.PUBLIC_URL}/assets/ute.png`} alt="cutlery" />
                        <p>2 servings</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/apple.png`} alt="apple" />
                        <p>820 cals/serving</p>
                    </div>
                    <p>Plant-based burger, THIS Isn’t Bacon, vegan smoked gouda,
                    shoestring fries, vegan bacon ketchup, chipotle ‘mayo’,
                    spinach and pickles with rosemary salted chips
                        </p>
                    <button>ADD TO BASKET</button>
                </div>
                <div className="burger_elem_topr">
                    <img src={`${process.env.PUBLIC_URL}/assets/main3.png`} alt="burger" />
                </div>
            </div>
            <div className="burger_elem_bot">
                <div className="burger_elem_bot_container">
                    <div className="burger_elem_bot_container_top">
                        <h5>fresh</h5>
                        <p>ingredients</p>
                    </div>
                    <div className="burger_elem_bot_container_bot">
                        <table id="customers">
                        <tbody>
                            <tr>
                                <td>10 oz</td>
                                <td>Ground beef</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>potato buns</td>
                            </tr>
                            <tr>
                                <td>1/2 lb</td>
                                <td>Broccoli</td>
                            </tr>
                            <tr>
                                <td>1 clove</td>
                                <td>Garlic</td>
                            </tr>
                            <tr>
                                <td>10 oz</td>
                                <td>Baby bok choy</td>
                            </tr>
                            <tr>
                                <td>2 Tbsp</td>
                                <td>Hoisin sauce</td>
                            </tr>
                            <tr>
                                <td>1 Tbsp</td>
                                <td>Sweet white miso paste</td>
                            </tr>
                            <tr>
                                <td>2 Tbsp</td>
                                <td>Mayonaise</td>
                            </tr>
                            <tr>
                                <td>1 Tbsp</td>
                                <td>White wine vinegar</td>
                            </tr>
                            <tr>
                                <td>1 Tbsp</td>
                                <td>Black & white sesame seeds</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerElem
