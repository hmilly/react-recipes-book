import { Link } from "react-router-dom";

const MainHead = () => {
  return (
    <header className="main_head">
      <div>
        <h1>Order our top-rated recipes today!</h1>
        <Link to="/menu">
          <button>GET STARTED</button>
        </Link>
      </div>
    </header>
  );
};

export default MainHead;
