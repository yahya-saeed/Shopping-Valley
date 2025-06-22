import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import { useState } from "react";

function Layout() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <Outlet context={{ cartItems, setCartItems }} />
    </>
  );
}

export default Layout;
