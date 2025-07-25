import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/product/list"); 
      const contentType = res.headers.get("content-type");
      console.log("contentType:", contentType); 

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error HTML:", errorText);
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      console.log("products response:", data);
      setProducts(data.products);
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  fetchProducts();
}, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
