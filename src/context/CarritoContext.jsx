import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (product) => {
    //setCarrito(prev => [...prev, product]);
    const existe = carrito.find(p => p.id === product.id);
    if (!existe) {
      setCarrito(prev => [...prev, { ...product, cantidad: 1 }]);
    } else {
      setCarrito(prev => prev.map(p => p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p));
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
