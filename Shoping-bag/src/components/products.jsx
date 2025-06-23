import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./card";

import "../App.css";

export default function Products() {
  const { cartItems, setCartItems } = useOutletContext();

  const handleAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    } else {
      alert("Already in cart");
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <main>
      <div className="cards">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </main>
  );
}
