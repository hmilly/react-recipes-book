import React from "react";


function Menu() {

    const seeMore = (e) => {
        const btn = document.querySelector(".onclickBtn");
        btn.setAttribute("disabled", true)
        console.log(e)
        const menuMid = document.querySelector(".menu_mid")
        menuMid.innerHTML += `
        <div class="menu_burger_card">
        <div class="burger_card_img">
            <img src=/assets/main1.png alt="burger" />
            <p>bacon plant</p>
        </div>
        <div class="burger_card_txt">
            <p>Plant-based burger with Honest beef, red onion relish</p>
            <img src=assets/clock.png alt="clock" />
            <p>55 min</p>
        </div>
    </div>
    <div class="menu_burger_card">
        <div class="burger_card_img">
            <img src=/assets/main3.png alt="burger" />
            <p>bacon plant</p>
        </div>
        <div class="burger_card_txt">
            <p>Plant-based burger with Honest beef, red onion relish</p>
            <img src=/assets/clock.png alt="clock" />
            <p>55 min</p>
        </div>
    </div>
    <div class="menu_burger_card">
        <div class="burger_card_img">
            <img src=/assets/main1.png alt="burger" />
            <p>bacon plant</p>
        </div>
        <div class="burger_card_txt">
            <p>Plant-based burger with Honest beef, red onion relish</p>
            <img src=/assets/clock.png alt="clock" />
            <p>55 min</p>
        </div>
    </div>`
    }

    return (
    <div className="menu">
            <div className="menu_top">
                <h1>Explore our Menus</h1>
                <p>Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
              Approved, Diabetes Friendly recipes and health-conscious offerings.</p>
            </div>
            <div className="menu_mid">
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main1.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main3.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main1.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main3.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main1.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main3.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main1.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main3.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>
                <div className="menu_burger_card">
                    <div className="burger_card_img">
                        <img src={`${process.env.PUBLIC_URL}/assets/main1.png`} alt="burger" />
                        <p>bacon plant</p>
                    </div>
                    <div className="burger_card_txt">
                        <p>Plant-based burger with Honest beef, red onion relish</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/clock.png`} alt="clock" />
                        <p>55 min</p>
                    </div>
                </div>

            </div>
            <div className="menu_bot">
                <button className="onclickBtn" onClick={(e) => seeMore(e)}>SEE MORE</button>
            </div>
        </div>
    )
}

export default Menu
