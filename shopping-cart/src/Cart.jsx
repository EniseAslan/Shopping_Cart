import CartItem from './CartItem'

function Cart({ cart }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm h-fit bg-white">
      <h2 className="text-2xl font-bold mb-4">Sepetim</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Cart