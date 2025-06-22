import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Outlet context={{ cartItems, setCartItems }} />
    </>
  );
}

export default App;
