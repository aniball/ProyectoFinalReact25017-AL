import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';
import heroImage from '../assets/athos-logo.png'; 

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-blue-50 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-4">
            Bienvenido a Athos Shop
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Explora nuestras categorías y encuentra lo mejor en tecnología, moda y más.
          </p>
          <Button as={Link} to="/products" color="blue" size="lg">
            Ver Productos
          </Button>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={heroImage}
            alt="Athos Shop Hero"
            className="h-48 md:h-64 object-contain"
          />
        </div>
      </section>

      {/* Destacados */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-400 mb-8">Categorías Populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Electrónica', image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', category: 'electronics' },
            { title: 'Joyería', image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', category: 'jewelery' },
            { title: 'Ropa Hombre', image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', category: "men's clothing" },
            { title: 'Ropa Mujer', image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', category: "women's clothing" },
          ].map((item, index) => (
            <Card key={index} className="rounded-xl shadow-md hover:shadow-xl transition bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
              <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
              <h5 className="text-lg font-bold text-gray-800 dark:text-white mt-4">{item.title}</h5>
              <Button as={Link} to={`/categoria/${encodeURIComponent(item.category)}`} color="blue" size="sm" className="mt-2">
                Ver productos
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
