import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div className="navbar">
      <h1 className="main-title-home">Shoping Vally</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="ri-shopping-cart-fill"></i>
            <span>{props.cartCount}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
