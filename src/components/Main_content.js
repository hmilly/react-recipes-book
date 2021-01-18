import React from "react";



function Main_content() {
    return (
        <div>
            <div className="main_content">
                <div className="mainLeft">
                    <div>
                    <img classname="main-img-1" src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`} alt="logo1"/>
                        <h1>Choose your meals</h1>
                        <p>Our chef-designed recipes include balanced
                        Medditerranean meals, quick one-pan dinners,
                        and top-rated customer favourites.
                            </p>
                            <img classname="main-img-2" src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`} alt="logo1"/>
                    </div>
                    <div>
                    <img classname="main-img-1" src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`} alt="logo1"/>
                        <h1>Unpack your box</h1>
                        <p>We guarentee the freshness of all our ingredients
                        and deliver them in an insulated box right to your
                        door.
                            </p>
                            <img classname="main-img-2" src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`} alt="logo1"/>
                    </div>
                    <div>
                    <img classname="main-img-1" src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`} alt="logo1"/>
                        <h1>Create magic</h1>
                        <p>Following our ste=-by-step instructions you'll
                        experience the magic of cooking recipes that our
                        chefs create with your family's tastes in mind.
                            </p>
                            <img classname="main-img-2" src={`${process.env.PUBLIC_URL}/assets/maingbg1.png`} alt="logo1"/>
                    </div>
                </div>
                <div className="mainRight">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="mainBot">
                <div>
                    <h2>SPECIAL OFFER</h2>
                </div>
                <div>
                    <h1>homemade burger</h1>
                    <button>GET STARTED</button>
                </div>
            </div>

        </div>
    )
}

export default Main_content
