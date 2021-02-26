import React from "react";
import { useHistory } from "react-router-dom";

function MainHead() {
  let history = useHistory();
  const menu = () => {
    history.push("/menu")
  }

  return (
    <div className="main_head">
      <div>
        <h1>Order our top-rated recipes today!</h1>
        <button className="get_started" onClick={menu}>GET STARTED</button>
      </div>
    </div>

  )
}

export default MainHead
