import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Products from "./components/products";
import Cart from "./components/cart";
import Home from "./components/home";

// Correct: routes array
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

// Correct: pass basename as the second argument
const router = createBrowserRouter(routes, {
  basename: "/Shopping-Valley",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
