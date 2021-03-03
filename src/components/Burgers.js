import React, { useContext} from "react";
import {
    Route,
    Link,
} from "react-router-dom";
import { store } from "../appContext"

function Burgers({ burgerObj }) {
   
    const { state, setItem, clicked } = useContext(store)

    const p = burgerObj.ingredients.map((ing, j) =>
        j < burgerObj.ingredients.length - 1
            ? `${ing.split(": ")[1]}, `
            : `${ing.split(": ")[1]}.`)


//  const [dis, setDis] = useState({disabled : false, txt : "Add to basket"})
//        const disableButton =  state.basketContents.find(b => b.burger === burgerObj)

        // useEffect(() => {
        //     if ( disableButton ) setDis({disabled : true, txt : "Added to basket"})  
        // },[disableButton])
       
    return (
        <div className="menu_burger_card">
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
                        <button className="add_btn" onClick={(e) => clicked(e, burgerObj, 1)}>Add to basket</button>
                    </div>
                </div>
            </Link>
            <Route path="/burgerCard" />
        </div>
    )
}

export default Burgers







