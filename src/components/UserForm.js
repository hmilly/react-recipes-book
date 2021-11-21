import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { store } from "../appContext"

function UserForm() {
    let history = useHistory();
    const orderComplete = () => {
        history.push("/complete")
    }
    const { state } = useContext(store)

    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const getUsers = async () => {
            await fetch('https://my-json-server.typicode.com/hmilly/db/users', {
                method: "GET",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Accept: 'application/json;odata.metadata=full',
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => setUsers(res))
                .catch((error) => console.log(error));
        }
        getUsers()
    }, [userDetails])

    const handleChange = (e) => {
        const name = e.target.name
        const v = name !== "phonenumber" ? e.target.value : parseInt(e.target.value)
        setUserDetails({ ...userDetails, id: users.length + 1, [name]: v })
    }

    const newUser = async () => {
        const userOrder = state.basketContents.map(b => `${b.burger.name} x ${b.quantity}`)
        const configObject = await {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json;odata.metadata=full',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...userDetails, "order": userOrder
            }),
        };
        await fetch(`https://my-json-server.typicode.com/hmilly/db/users`, configObject)
            .then((res) => (res.ok ? res.json() : "Oops we couldn't update that!"))
            .catch((error) => console.log(error));
        orderComplete()
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.basketContents.length === 0) {
            window.alert("Please add something to the basket")
        } else {
            const u = users.find(u => u.email.toLowerCase() === userDetails.email.toLowerCase())
            u ? window.alert("Email entered is currently in use, please re-enter and try again")
                : newUser()
        }
    }

    return (
        <form>
            <h1>Your details:</h1>
            <select name="title" placeholder="Title" onChange={(e) => handleChange(e)} >
                <option value="Mr" >Select:</option>
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
            <input type="text" name="email" placeholder="Email address*" required={true}
                onChange={(e) => handleChange(e)} />
            <p>Contact number:</p>
            <input type="tel" name="phone" placeholder="Phone number*"
                onChange={(e) => handleChange(e)} />
            <p>Delivery address:</p>
            <input className="postcode" name="address" placeholder="Address*" type="text"
                onChange={(e) => handleChange(e)} />
            <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>SUBMIT</button>
        </form>
    )
}

export default UserForm
