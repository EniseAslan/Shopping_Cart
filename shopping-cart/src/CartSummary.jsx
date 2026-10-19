function CartSummary({ cart }) {
  const totalCount = cart.reduce((s, i) => s + i.qty, 0)
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="mt-4 pt-4 border-t-2">
      <div className="flex justify-between text-gray-600">
        <span>Total İtems</span>
        <span>{totalCount} Qty</span>
      </div>
      <div className="flex justify-between text-lg font-bold text-gray-800 mt-1">
        <span>Total Amount</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartSummary