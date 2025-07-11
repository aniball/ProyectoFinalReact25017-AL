import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { Button, Card } from 'flowbite-react';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleAddToCart = () => {
    agregarAlCarrito(product);
    toast.success(`🛒 ${product.title} - Agregado al Carrito!`);
  };

  return (
    <Card className="w-80 mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="relative w-full flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mt-6 mb-2 transition-transform duration-300 hover:scale-105"
          style={{ maxWidth: '160px' }}
        />
        <span className="absolute top-2 right-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded">
          ${product.price}
        </span>
      </div>
      <div className="px-4 pb-4 flex flex-col items-center w-full">
        <h5 className="text-lg font-bold mt-2 text-center line-clamp-2 text-gray-800 dark:text-white">
          {product.title}
        </h5>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 mb-3 text-center line-clamp-2">
          {product.description}
        </p>
        <div className="flex gap-2 w-full justify-center">
          <Button color="blue" onClick={handleAddToCart} className="w-1/2">
            Agregar
          </Button>
          <Link
            className="w-1/2 border border-blue-500 text-blue-600 dark:text-blue-400 px-3 py-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900 text-sm flex items-center justify-center transition"
            to={`/product/${product.id}`}
          >
            Detalles
          </Link>
        </div>
      </div>
    </Card> 
  );
};

export default ProductCard;