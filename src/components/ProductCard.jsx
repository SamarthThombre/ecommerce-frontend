import React from 'react';
import fallbackImage from '../assets/img.jpg';
import  useCart  from '../components/useCart.js';
import { useState } from 'react';

const ProductCard = ({ product }) => {

  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
  addToCart(product); // your cart context function
  setAddedToCart(true);

  // Optional: hide the message after 2 seconds
  setTimeout(() => setAddedToCart(false), 2000);
  };
  
 

  

  const {
    image,
    name,
    price,
    description,
    countInStock,
  } = product || {};

  return (
    <div className="relative m-4 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-[#DDD6CE] shadow-md">
      <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img
          className="object-cover w-full h-full"
          src={image?.url || fallbackImage}
          alt={name || 'Product image'}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          In Stock: {countInStock || 0}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">
            {name || 'Unnamed Product'}
          </h5>
        </a>
        <p className="text-sm text-gray-500 mt-1 mb-3 ">{description || 'No description available.'}</p>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">₹{price || '0'}</span>
            <span className="text-sm text-slate-900 line-through ml-2">
              ₹{Math.round(price * 1.2) || '0'}
            </span>
          </p>
          
          
        </div>
        <button
          className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
          onClick={handleAddToCart}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p>Add to cart</p>

          {addedToCart && (
            <p className="text-green-600 font-semibold m-2 transition-all duration-300">
            ✔️ Added to Cart!
            </p>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
