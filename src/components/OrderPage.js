import React, { useState } from 'react'
import db from "../db.json"

function OrderPage() {

    const [data, setData] = useState({
        "id": 0,
        "title": "",
        "firstname": "",
        "lastname": "",
        "email": "",
        "password": "",
        "phonenumber": 0,
        "postcode": ""
    })

    const handleChange = (e) => {
        // console.log(name, value)
        const name = e.target.name
        const v = name !== "phonenumber" ? e.target.value : parseInt(e.target.value)
        setData({ ...data, [name] : v})
    }

    const handleSubmit = () => {
        
        setData({ ...data, id : db.length+1})
        console.log(data)
        db.push(data)   
        console.log(db)
    }

    return (

        <div className="order_page">
            <div className="order_page_form">
                <form>
                    <p>Your details:</p>
                    <select name="title" placeholder="Title" onChange={(e) => handleChange(e)} >
                        <option value="Mr" >Mr</option>
                        <option value="Mrs" >Mrs</option>
                        <option value="Ms" >Ms</option>
                        <option value="Mx" >Mx</option>
                    </select>
                    <div>
                        <input type="text" name="firstname" placeholder="First name*"
                            onChange={(e) => handleChange(e)} />
                        <input type="text" name="lastname" placeholder="Last name*"
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <input type="text" name="email" placeholder="Email address*"
                        onChange={(e) => handleChange(e)} />
                    <input type="password" name="password" placeholder="Password*" minLength="8" required
                        onChange={(e) => handleChange(e)} />
                    <p>Contact number:</p>
                    <input type="number" name="phonenumber" placeholder="Phone number*"
                        onChange={(e) => handleChange(e)} />
                    <p>Delivery address:</p>
                    <input className="postcode" name="postcode" placeholder="Postcode*" type="text"
                        onChange={(e) => handleChange(e)} />
                    <button type="submit" value="submit" onSubmit={handleSubmit}>SUBMIT</button>
                </form>
            </div>

            <div className="order_page_receipt">
                <div className="receipt_buy">
                    <img src={`${process.env.PUBLIC_URL}/assets/buy.png`} alt="cart" />
                    <button> basket</button>
                </div>
                <div className="receipt_main">
                    <div className="receipt_main_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main3.png`} alt="burger" />
                    </div>
                    <div className="receipt_main_info">
                        <div>
                            <h4>2 servings</h4>
                            <h4>2 burgers</h4>
                        </div>
                        <p>Ground beef, Potato Buns, Broccoli, Garlic,
                        Baby Bok Choy, Hoisin Sauce, Sweet White Miso
                        Paste, Mayonnaise, White Wine Vinegar, Black
                        & White Sesame Seeds
                        </p>
                        <select name="quantity">
                            <option value="1" >1</option>
                            <option value="2" >2</option>
                            <option value="3" >3</option>
                            <option value="4" >4</option>
                            <option value="5" >5</option>
                        </select>
                        <h3>£15</h3>
                    </div>
                </div>
                <div className="receipt_delivery">
                    <h3>Delivery Fee:</h3>
                    <h3>£3</h3>
                </div>
                <div className="receipt_total">
                    <h3>Total Price:</h3>
                    <h3>£18</h3>
                </div>
            </div>
        </div>
    )
}


export default OrderPage
