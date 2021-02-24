import React, { useContext, useState } from 'react'
import { store } from "../appContext"

function OrderPage({ UserForm }) {

    const { state, deleteFromBasket } = useContext(store)
    console.log(state.basketContents)


    // const p = store.basketContents[0].ingredients.map((ing, j) =>
    //     j < store.basketContents[0].ingredients.length - 1
    //         ? `${ing.split(": ")[1]}, `
    //         : `${ing.split(": ")[1]}.`)

    const [totalPrice, setTotalPrice] = useState(0)
    const [selectValue, setSelectValue] = useState(0)
    
    const handleSelectChange = (e, price) => {
        const p = parseFloat(price)
        const q = parseInt(e.target.value)
        setSelectValue(q)
        const equat = p*q
        setTotalPrice(totalPrice + equat)
        //console.log(totalPrice)
        console.log(p, q, equat, totalPrice)
    }



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
                        <select name="quantity" value={selectValue} onChange={(e) => handleSelectChange(e, b.burger.price)}>
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
                    <h3>£{totalPrice}</h3>
                </div>
            </div>
        </div>
    )
}


export default OrderPage
