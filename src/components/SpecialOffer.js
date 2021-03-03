import React from 'react'
import { Route, Link, } from "react-router-dom";

function SpecialOffer() {
    return (
        <div>
            <div className="special_offer">
                <div className="special_offer_txt">
                    <h2>SPECIAL</h2>
                    <h2> OFFER</h2>
                </div>
                <div className="special_offer_getstarted">
                    <h1>homemade burger</h1>
                    <Link to="/menu"><button >GET STARTED</button></Link>
                </div>
            </div>
            <Route path="/menu" />
        </div>
    )
}

export default SpecialOffer
