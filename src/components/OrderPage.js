import React, { useContext } from 'react'
import { store } from "../appContext"

function OrderPage({ UserForm }) {
    const { state, deleteFromBasket, clicked, totalPrice } = useContext(store)

    let burgers
    if (state.basketContents) {
        burgers = state.basketContents.map((b, i) =>
            <div className="burger_in_cart" key={i}>
                <div className="burger_in_cart_img">
                    <img src={`${process.env.PUBLIC_URL}${b.burger.imageUrl}`} alt="burger" />
                </div>
                <div className="burger_in_cart_main">
                    <p>{b.burger.name}</p>
                    <div>
                        <h3>£{b.burger.price}</h3>
                        <select name="quantity" value={b.quantity} onChange={(e) => clicked(e, b.burger, e.target.value)}>
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                            <option value="6" >6</option>
                            <option value="7" >7</option>
                            <option value="8" >8</option>
                            <option value="9" >9</option>
                        </select>
                        <button onClick={(e) => deleteFromBasket(e, b.burger)}>X</button>
                    </div>
                </div>
            </div>
        )
    }

    let total
    if (totalPrice === 0) {
        total = 0
    } else if (!Number.isInteger(totalPrice)) {
        total = (totalPrice + 3).toString().concat("0")
    } else {
        total = totalPrice + 3
    }

    return (
        <div className="order_page">
            <UserForm />
            <div className="order_page_receipt">
                <div className="receipt_top">
                    <h1>Basket</h1>
                </div>
                <div className="receipt_main">
                    {burgers.length !== 0 ? burgers : <p>Nothing added to basket yet, please use the menu</p>}
                </div>
                <div className="receipt_delivery">
                    <h3>Delivery Fee:</h3>
                    <h3>£3</h3>
                </div>
                <div className="receipt_total">
                    <h3>Total Price:</h3>
                    <h3>£{total}</h3>
                </div>
            </div>
        </div>
    )
}

export default OrderPage
