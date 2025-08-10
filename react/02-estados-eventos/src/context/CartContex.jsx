import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (pizza) => {
    setCarts((prev) => {
      const existe = prev.find((p) => p.id === pizza.id);
      if (existe) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prev, { ...pizza, count: 1 }];
    });
  };

  // Aumentar cantidad
  
  const increase = (id) => {
    setCarts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  // Disminuir cantidad (y quitar si llega a 0)

  const decrease = (id) => {
    setCarts((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  // Calcular total

  const total = useMemo(
    () => carts.reduce((sum, p) => sum + p.price * p.count, 0),
    [carts]
  );

  return (
    <CartContext.Provider value={{ carts, addToCart, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;