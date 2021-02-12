import React, { useContext } from "react";
import appContext from "./context/appContext"

function BurgerElem() {
    const { selectedBurger } = useContext(appContext)
    console.log(selectedBurger)

    const p = selectedBurger.prep.ingredients
    .map((ing, j) => j < selectedBurger.prep.ingredients.length - 1 ? `${ing}, ` : `${ing}.`)

    return (
        <div className="burger_elem">
            <div className="burger_elem_top">
                <div className="burger_elem_topl">
                    <p className="bacon-plant">{selectedBurger.name}</p>
                    <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                    <p>{selectedBurger.prepTime}</p>
                    <div className="topl_div">
                        <img src={`${process.env.PUBLIC_URL}/assets/ute.png`} alt="cutlery" />
                        <p>2 servings</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/apple.png`} alt="apple" />
                        <p>820 cals/serving</p>
                    </div>
                    <p>{p}</p>
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
                                    <td>potato buns</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>
                                        {selectedBurger.prep.ingredients}
                                    </td>
                                    <td>
                                        {selectedBurger.prep.measurements}
                                    </td>
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
