import { PROMOS } from './data/promos' 

function CartSummary({ cart, promoCode }) {
  const totalCount = cart.reduce((s, i) => s + i.qty, 0)
  const subtotal   = cart.reduce((s, i) => s + i.price * i.qty, 0)

  const promo = promoCode ? PROMOS[promoCode] : null
  let discount = 0
  if (promo) {
    discount = promo.type === 'percent'
      ? subtotal * (promo.value / 100)
      : Math.min(promo.value, subtotal)  
  }
  const total = subtotal - discount

  return (
    <div className="mt-4 pt-4 border-t-2">
      <div className="flex justify-between text-gray-600">
        <span>Total Items</span>
        <span>{totalCount} Qty</span>
      </div>

      {promo && (
        <>
          <div className="flex justify-between text-gray-600 mt-1">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600 mt-1">
            <span>Discount ({promoCode})</span>
            <span>−${discount.toFixed(2)}</span>
          </div>
        </>
      )}

      <div className="flex justify-between text-lg font-bold text-gray-800 mt-1">
        <span>Total Amount</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartSummary