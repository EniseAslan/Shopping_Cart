import CartItem from './CartItem'
import CartSummary from './CartSummary'

function Cart({ cart, onInc, onDec, onRemove,onClear }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm h-fit bg-white">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
         Your shopping cart is empty
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onInc={onInc}
              onDec={onDec}
              onRemove={onRemove}
            />
          ))}
          <CartSummary cart={cart} />
          <button onClick={onClear}
          className="mt-4 w-full py-2 rounded border border-red-300 text-red-600 hover:bg-red-50">
           Remove All Items
          </button>
        </>
      )}
    </div>
  )
}

export default Cart