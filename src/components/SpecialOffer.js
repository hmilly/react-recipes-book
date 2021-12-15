import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <div className="special_offer_cont">
      <div className="special_offer">
        <h2>SPECIAL</h2>
        <h2> OFFER</h2>
      </div>
      <div className="special_offer_main">
        <h1>homemade burger</h1>
        <Link to="/menu">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default SpecialOffer;
