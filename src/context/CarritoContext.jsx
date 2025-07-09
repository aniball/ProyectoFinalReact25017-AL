import React, { createContext, useState } from 'react';
import { toast } from "react-toastify";

export const CarritoContext = createContext();
export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (product) => {
    const existe = carrito.find(p => p.id === product.id);
    if (!existe) {
      setCarrito(prev => [...prev, { ...product, cantidad: 1 }]);
    } else {
      setCarrito(prev => prev.map(p => p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p));
    }
  };

  const eliminarDelCarrito = (id) => {
    const producto = carrito.find((item) => item.id === id);
    setCarrito(carrito.filter((item) => item.id !== id));
    toast.info(`❌ ${producto?.title || "Producto"} eliminado del carrito`);
  };

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    const actualizado = carrito.map((item) =>
      item.id === id ? { ...item, cantidad } : item
    );
    setCarrito(actualizado);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    toast.info("🧹 Carrito vaciado");
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, vaciarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
