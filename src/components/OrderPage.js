import React, { useContext } from 'react'
import { store } from "../appContext"

function OrderPage({ UserForm }) {
    const { state, deleteFromBasket, clicked, totalPrice } = useContext(store)

    let burgers
    if (state.basketContents) {
        burgers = state.basketContents.map((b, i) =>
            <div className="burger_in_cart" key={i}>
                {console.log(b.quantity)}
                <div className="receipt_main_img">
                    <img src={`${process.env.PUBLIC_URL}${b.burger.imageUrl}`} alt="burger" />
                </div>
                <div className="receipt_main_info">
                    <p>{b.burger.name}</p>
                    <div>
                        <h3>£{b.burger.price}</h3>
                        <select name="quantity" value={b.quantity} onChange={(e) => clicked(e, b.burger, e.target.value)}>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                        </select>
                        <button onClick={(e) => deleteFromBasket(e, b.burger)}>X</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="order_page">
            <UserForm />
            <div className="order_page_receipt">
                <div className="receipt_buy">
                    <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
                    <button> basket</button>
                </div>
                <div className="receipt_main">
                    {burgers}
                </div>
                <div className="receipt_delivery">
                    <h3>Delivery Fee:</h3>
                    <h3>£3</h3>
                </div>
                <div className="receipt_total">
                    <h3>Total Price:</h3>
                    <h3>£{totalPrice > 0 ? totalPrice + 3 : totalPrice}</h3>
                </div>
            </div>
        </div>
    )
}

export default OrderPage
