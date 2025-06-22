import React from "react";

import "./card.css";

function Card({ title, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Card;
