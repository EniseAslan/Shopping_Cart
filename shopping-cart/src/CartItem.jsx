function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div>
        <p className="font-medium text-gray-800">{item.name}</p>
        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <p className="text-gray-700">x{item.qty}</p>
    </div>
  )
}

export default CartItem