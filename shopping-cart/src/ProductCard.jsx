import React from 'react'

function ProductCard({ product, onAdd }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAdd(product)}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;