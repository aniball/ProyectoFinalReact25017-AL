import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Card, Spinner } from 'flowbite-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetch(`https://fakestoreapi.com/products/${id}`)
    fetch(`https://686b128ee559eba9087171ff.mockapi.io/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="flex justify-center items-center h-40">
      <Spinner size="xl" />
    </div>
  );
  if (error || !product) return (
    <Alert color="failure" className="my-4">
      Error loading product
    </Alert>
  );
  return (
    <Card className="max-w-md mx-auto p-6 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
        style={{ width: '150px' }}
      />
      <h2 className="text-xl font-bold mb-2 text-center">{product.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">{product.description}</p>
      <p className="text-lg font-semibold text-blue-600 dark:text-gray-300 mb-2">${product.price}</p>
    </Card>
  );
};

export default ProductDetail;