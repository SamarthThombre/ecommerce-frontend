import React from 'react'

function ProductCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300 w-full max-w-xs">
      <img
        src="src/assets/sample-plant.jpg"
        alt="Product"
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Monstera Deliciosa</h3>
        <p className="text-gray-500 text-sm mb-2">Indoor Plant</p>
        <div className="flex items-center justify-between">
          <span className="text-green-600 font-bold text-lg">$29.99</span>
          <button className="bg-green-600 text-white px-4 py-1 rounded-full text-sm hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  )
}

export default ProductCard