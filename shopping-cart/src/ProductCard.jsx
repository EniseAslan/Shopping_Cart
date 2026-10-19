function ProductCard({ product, inCartQty, onAdd }) {
  const remaining = product.stock - inCartQty
  const outOfStock = remaining <= 0

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
      {!outOfStock && (
        <p className={`text-xs mt-1 ${remaining <= 2 ? 'text-orange-600' : 'text-gray-500'}`}>
          {remaining} left in stock
        </p>
      )}

      <button
        onClick={() => onAdd(product)}
        disabled={outOfStock}
        className={`mt-3 w-full py-2 rounded transition-colors ${
          outOfStock
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {outOfStock ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  )
}
export default ProductCard