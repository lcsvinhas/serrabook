import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.titulo === item.titulo);
      if (existingItem) {
        return prevItems.map((i) =>
          i.titulo === item.titulo ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantidade: 1 }];
      }
    });
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
