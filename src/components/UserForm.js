import React, {useEffect, useState} from 'react'

function UserForm() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            await fetch('db.json')
                .then(res => res.json())
                .then(res => setUsers(res.users))
                .catch((error) => console.log(error));
        }
        getUsers()
    }, [])

    const [userDetails, setUserDetails] = useState({
        "id": users.length + 1,
        "title": "",
        "firstname": "",
        "lastname": "",
        "email": "",
        "password": "",
        "phonenumber": 0,
        "postcode": ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const v = name !== "phonenumber" ? e.target.value : parseInt(e.target.value)
        setUserDetails({ ...userDetails, [name]: v })
        console.log(userDetails)
    }

    const newUser = async () => {
        const configObject = await {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                ...userDetails
            }),
        };
        await fetch(`${process.env.PUBLIC_URL}/db.json`, configObject)
            .then((res) => (res.ok ? res.json() : "Oops we couldn't update that!"))
            .catch((error) => console.log(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        //users.push(userDetails) 
        users.map(u => u.email.toLowerCase() === userDetails.email.toLowerCase()
            ? window.alert("Email entered is currently in use, please re-enter and try again")
            : newUser()
        )
    }

    return (
        <div className="order_page_form">
            <form>
                <p>Your details:</p>
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
                <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>SUBMIT</button>
            </form>
        </div>
    )
}


export default UserForm