import React from "react";
import {
  Route,
  Link
} from "react-router-dom";

function MainHead() {


  return (
    <div className="main_head">
      <div>
        <h1>Order our top-rated recipes today!</h1>
        <Link to="/menu"><button className="get_started">GET STARTED</button></Link>
      </div>
      <Route path="/menu" />
    </div>

  )
}

export default MainHead
