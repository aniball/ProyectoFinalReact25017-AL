import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'flowbite-react';
import { CarritoContext } from '../context/CarritoContext';
import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Carrito = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const total = carrito.reduce((sum, item) => sum + item.price, 0);

  return (
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Tu Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p className="text-gray-500 font-bold text-center">Actualmente no tenés productos en tu carrito.</p>
        ) : (
          <Card className="shadow-md p-6 rounded-lg">
            <ul className="divide-y divide-gray-200">
              {carrito.map((item, idx) => (
                <li key={idx} className="py-4 flex justify-between items-center">
                  <span className="text-gray-800">
                    {item.title} × {item.cantidad || 1}
                  </span>
                  <span className="font-semibold text-blue-600">
                    ${item.price * (item.cantidad || 1)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
              <div className="flex gap-4">
                <Button color="gray" onClick={vaciarCarrito}>
                  Vaciar
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    );
};

export default Carrito;