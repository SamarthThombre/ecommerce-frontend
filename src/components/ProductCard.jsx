import React from 'react';
import img from '../assets/img.jpg';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className='border rounded-lg p-4 shadow hover:shadow-lg transition w-fit'>
      <div className="">
        <img
          src={product?.image?.url || img}
          alt={product?.name || 'Product image'}
          className="h-fit w-fit  mb-4"
        />
        <h3 className="text-lg font-bold">{product?.name || 'Unnamed Product'}</h3>
        <p className="text-sm text-gray-600 mb-2">{product?.description || 'No description available'}</p>
        <p className="text-green-600 font-semibold">₹{product?.price ?? 'N/A'}</p>
        <p className="text-xs text-gray-500">Brand: {product?.brand || 'Unknown'}</p>
        <p className="text-xs text-gray-500">In Stock: {product?.countInStock ?? 0}</p>
      </div>
    </div>
  );
};

export default ProductCard;
