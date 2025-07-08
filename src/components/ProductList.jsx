import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import ProductCard from './ProductCard';
import { Spinner, Alert } from 'flowbite-react';

const ProductList = () => {
  const { categoria } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = 'https://686b128ee559eba9087171ff.mockapi.io/products';
    if (categoria) {
      url += `?category=${encodeURIComponent(categoria)}`;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar productos");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, [categoria]);

  if (loading) return (
    <div className="flex justify-center items-center h-40">
      <Spinner size="xl" />
    </div>
  );
  if (error) return (
    <Alert color="failure" className="my-4">
      Error loading products
    </Alert>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
      {products.length === 0 && (
        <Alert color="info" className="my-4">
          No products found
        </Alert>
      )}
    
    </div>
  );
};

export default ProductList;