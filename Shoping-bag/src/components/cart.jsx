import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import "./cart.css";

function Cart() {
  const { cartItems, setCartItems } = useOutletContext();
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    setQuantities(cartItems.map(() => 1));
  }, [cartItems]);

  const handleQuantityChange = (index, value) => {
    const updated = [...quantities];
    updated[index] = parseInt(value) || 1;
    setQuantities(updated);
  };

  const handleRemove = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    const updatedQuantities = quantities.filter(
      (_, index) => index !== indexToRemove
    );
    setCartItems(updatedCart);
    setQuantities(updatedQuantities);
  };

  return (
    <div className="my-cart-container">
      <h2 className="my-cart-heading">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="my-cart-empty">🛒 Cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="my-cart-item">
            <img src={item.image} className="my-cart-img" alt="img" />
            <div className="my-cart-details">
              <h3 className="my-cart-title">{item.title}</h3>
              <p className="my-cart-price">${item.price}</p>
              <p className="my-cart-desc">{item.description}</p>

              <div className="my-cart-controls">
                <input
                  type="number"
                  className="my-cart-quantity"
                  min="1"
                  value={quantities[index] || 1}
                  onChange={(e) => handleQuantityChange(index, e.target.value)}
                />
                <p className="my-cart-total">
                  Total: ${(item.price * (quantities[index] || 1)).toFixed(2)}
                </p>
                <button
                  className="my-cart-remove-btn"
                  onClick={() => handleRemove(index)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
