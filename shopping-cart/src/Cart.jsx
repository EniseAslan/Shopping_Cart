import CartItem from './CartItem'
import CartSummary from './CartSummary'

function Cart({ cart, onInc, onDec, onRemove }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm h-fit bg-white">
      <h2 className="text-2xl font-bold mb-4">Sepetim</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-6">
          Sepetiniz boş.
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
        </>
      )}
    </div>
  )
}

export default Cart