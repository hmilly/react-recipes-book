import React from "react";


function Main_head() {
  return (
    <div className="main_head">
       <img src={`${process.env.PUBLIC_URL}/assets/mainhead.png`} alt="burger_and_sides" />
      <div>
        <h1>Order our top-rated recipes today!</h1>
        <button>GET STARTED</button>
      </div>
    </div>
  )
}

export default Main_head
