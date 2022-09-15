import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Order our top-rated recipes today!</h1>
        <Link to="/menu">
          <button>GET STARTED</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
