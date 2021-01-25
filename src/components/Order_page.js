import React from 'react'

function Order_page() {
    return (
        <div className="order_page">
            <div className="order_page_form">
                <form>
                    <select name="Title">
                        <option value="Title" >Title</option>
                    </select>
                    <input type="text" name="firstname"></input>
                    <input type="text" name="lastname"></input>
                    <input type="text" name="mail"></input>
                    <input type="password" id="pass" name="password"
                        minlength="8" required></input>
                    <input type="number"></input>
                    <input id="zip" name="postcode" type="text" pattern="[0-9]*"></input>
                </form>
            </div>
            <div className="order_page_receipt">

            </div>
        </div>
    )
}


export default Order_page
