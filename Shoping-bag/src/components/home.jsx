import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="homeDiv">
      <h1>Welcome To Shoping Vally</h1>
      <Link className="btnHome" to="/products">
        Products
      </Link>
    </div>
  );
}

export default Home;
