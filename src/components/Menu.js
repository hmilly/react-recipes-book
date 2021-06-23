import React, { useState, useEffect } from "react";

function Menu({ Burgers }) {
    const [allBurgers, setAllBurgers] = useState([])
    const [num, setnum] = useState(9)
    const [btn, setbtn] = useState(true)
    // json-server -p 8080 ./public/db.json
    useEffect(() => {
        const getBurgers = async () => {
            await fetch('db.json')
                .then(res => res.json())
                .then(res => setAllBurgers(res.burgers))
                .catch((error) => console.log(error));
        }
        getBurgers()
    }, [])

    const moreOrLess = () => {
        setbtn(!btn)
        num === 12 ? setnum(9) : setnum(12)
    }
    
    return (
        <div className="menu">
            <div className="menu_top">
                <h1>Explore our Menus</h1>
                <p>Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
                    Approved, Diabetes Friendly recipes and health-conscious offerings.</p>
            </div>
            <div className="menu_mid">
                {allBurgers.slice(0, num).map((b, i) => (
                    <Burgers key={b.name} burgerObj={b} />
                ))}
            </div>
            <div className="menu_bot">
                <button className="onclickBtn"
                    onClick={moreOrLess}>{btn === true ? "SEE MORE" : "SEE LESS"}
                </button>
            </div>
        </div>
    )
}

export default Menu
