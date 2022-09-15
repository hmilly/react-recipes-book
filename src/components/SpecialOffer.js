import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <div className="offer_container">
      <div className="offer_text">
        <h3>SPECIAL</h3>
        <h3> OFFER</h3>
      </div>
      <div className="offer_wrapper">
        <h2 id="offer_header">homemade burger</h2>
        <Link to="/menu">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default SpecialOffer;
