import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';
import { Button, Card } from 'flowbite-react';
import Swal from 'sweetalert2';

const ProductCard = ({ product }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleAddToCart = () => {
    agregarAlCarrito(product);
    Swal.fire({
      icon: 'success',
      title: '¡Agregado!',
      text: 'El producto fue agregado al carrito.',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  return (
    <Card className="w-80 mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center border border-gray-200">
      <div className="relative w-full flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mt-6 mb-2 transition-transform duration-300 hover:scale-105"
          style={{ maxWidth: '160px' }}
        />
        <span className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
          ${product.price}
        </span>
      </div>
      <div className="px-4 pb-4 flex flex-col items-center w-full">
        <h5 className="text-lg font-bold mt-2 text-center line-clamp-2">{product.title}</h5>
        <p className="text-gray-500 text-sm mt-1 mb-3 text-center line-clamp-2">{product.description}</p>
        <div className="flex gap-2 w-full justify-center">
          <Button color="blue" onClick={handleAddToCart} className="w-1/2">
            Agregar
          </Button>
          <Link
            className="w-1/2 border border-blue-500 text-blue-600 px-3 py-2 rounded hover:bg-blue-50 text-sm flex items-center justify-center transition"
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