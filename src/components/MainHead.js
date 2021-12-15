import { Link } from "react-router-dom";

const MainHead = () => {
  return (
    <div className="main_head">
      <div>
        <h1>Order our top-rated recipes today!</h1>
        <Link to="/menu">
          <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default MainHead;
