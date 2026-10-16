function CartItem({ item, onInc, onDec, onRemove }) {
  return (
    <div className="flex justify-between items-center py-3 border-b gap-2">
      <div className="flex-1">
        <p className="font-medium text-gray-800">{item.name}</p>
        <p className="text-sm text-gray-500">
          ${item.price.toFixed(2)} × {item.qty} = ${(item.price * item.qty).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onDec(item.id)}
          className="w-7 h-7 rounded bg-gray-200 hover:bg-gray-300"
        >
          -
        </button>
        <span className="w-6 text-center">{item.qty}</span>
        <button
          onClick={() => onInc(item.id)}
          className="w-7 h-7 rounded bg-gray-200 hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-sm text-red-500 hover:text-red-700"
      >
        Kaldır
      </button>
    </div>
  )
}

export default CartItem