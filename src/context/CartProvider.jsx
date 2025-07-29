import { useState } from 'react';
import { CartContext } from '../context/CartContext.js';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product); // 🔍 DEBUG LINE
    setCartItems((prev) => [...prev, product]);
  };

   const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item._id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
