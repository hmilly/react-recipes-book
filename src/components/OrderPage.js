import React, {useState} from 'react'
import db from "../db.json"

function OrderPage() {

       const handleSubmit = (e) => {
            const formData = new FormData(e.target);
            e.preventDefault();
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
               
            }
        }
    

        // let postComment = async (newComment) => {
        //     const configObject = {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //             Accept: "application/json",
        //         },
        //         body: JSON.stringify(newComment),
        //     };
        
        //     return await fetch(`${baseURL}/comments`, configObject)
        //         .then(res => (res.ok) ? res.json() : "Oops something went wrong!").catch(error => console.log(error))
        // }
        
    


    return (
        <div className="order_page">
            <div className="order_page_form">
                <form onSubmit={handleSubmit}>
                    <p>Your details:</p>
                    <select name="title">
                        <option value="Title" >Title</option>
                        <option value="Mr" >Mr</option>
                        <option value="Mrs" >Mrs</option>
                        <option value="Ms" >Ms</option>
                        <option value="Mx" >Mx</option>
                    </select>
                    <div>
                        <input type="text" name="firstname"placeholder="First name*"/>
                        <input type="text" name="lastname" placeholder="Last name*"/>
                    </div>
                    <input type="text" name="email" placeholder="Email address*"/>
                    <input type="password" name="password" placeholder="Password*" minLength="8" required/>
                    <p>Contact number:</p>
                    <input type="number" placeholder="Phone number*"/>
                    <p>Delivery address:</p>
                    <input className="postcode" name="postcode" placeholder="Postcode*" type="text"/>
                    <button type="submit" value="submit">SUBMIT</button>
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
