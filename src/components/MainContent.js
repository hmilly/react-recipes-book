import React from "react";

function MainContent() {
    return (
        <div className="main_cont">
            <div className="main_cont-row">
                <div>
                    <img className="main-img-1" src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`} alt="burger_logo" />
                    <h1>Choose your meals</h1>
                    <p>Our chef-designed recipes include balanced
                        Medditerranean meals, quick one-pan dinners,
                        and top-rated customer favourites.</p>
                    <img className="main-img-2" src={`${process.env.PUBLIC_URL}/assets/maingbg2.png`} alt="burger_logo" />
                </div>
                <img className="main_cont-img" src={`${process.env.PUBLIC_URL}/assets/main1.png`} alt="burger" />
            </div>
            <div className="main_cont-row">
                <div>
                    <img className="main-img-1" src={`${process.env.PUBLIC_URL}/assets/maingbg3.png`} alt="burger_logo" />
                    <h1>Unpack your box</h1>
                    <p>We guarentee the freshness of all our ingredients
                        and deliver them in an insulated box right to your
                        door.</p>
                    <img className="main-img-2" src={`${process.env.PUBLIC_URL}/assets/maingbg4.png`} alt="burger_logo" />
                </div>
                <img className="main_cont-img" src={`${process.env.PUBLIC_URL}/assets/main2.png`} alt="shopping_img" />
            </div>
            <div className="main_cont-row">
                <div>
                    <img className="main-img-1" src={`${process.env.PUBLIC_URL}/assets/maingbg5.png`} alt="burger_logo" />
                    <h1>Create magic</h1>
                    <p>Following our step-by-step instructions you'll
                        experience the magic of cooking recipes that our
                        chefs create with your family's tastes in mind.</p>
                    <img className="main-img-2" src={`${process.env.PUBLIC_URL}/assets/maingbg6.png`} alt="burger_logo" />
                </div>
                <img className="main_cont-img" src={`${process.env.PUBLIC_URL}/assets/7.png`} alt="burger" />
            </div>
        </div>
    )
}

export default MainContent
