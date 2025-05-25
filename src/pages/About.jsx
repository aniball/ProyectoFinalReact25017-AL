import React from 'react';
import { Card } from 'flowbite-react';
import logo from '../assets/athos-logo.png'; // Ajustá el path si es necesario

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card className="shadow-md rounded-xl p-8 bg-white">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="Athos Shop Logo" className="h-20 mb-6" />
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Sobre Athos Shop</h1>
          <p className="text-gray-600 max-w-2xl">
            Bienvenido a <strong>Athos Shop</strong>, tu tienda en línea confiable para descubrir y comprar
            productos de calidad. Nos especializamos en ofrecer una experiencia de compra simple,
            rápida y segura, con una selección cuidada de artículos en electrónica, moda y accesorios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Nuestra misión</h2>
            <p className="text-gray-600">
              Ofrecer productos útiles y accesibles con un enfoque en atención al cliente,
              confiabilidad y entrega rápida. Queremos ser tu primera opción cuando pienses en compras online.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Por qué elegirnos?</h2>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Envíos a todo el país</li>
              <li>Pagos seguros y protegidos</li>
              <li>Productos verificados y reseñados</li>
              <li>Atención personalizada</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">Gracias por elegirnos. ¡Felices compras!</p>
        </div>
      </Card>
    </div>
  );
};

export default About;
