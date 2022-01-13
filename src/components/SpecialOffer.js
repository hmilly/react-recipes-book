import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <div className="offer_container">
      <div className="offer_text">
        <h2>SPECIAL</h2>
        <h2> OFFER</h2>
      </div>
      <div className="offer_wrapper">
        <h1>homemade burger</h1>
        <Link to="/menu">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default SpecialOffer;
