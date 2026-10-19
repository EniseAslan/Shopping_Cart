import CartItem from './CartItem'
import CartSummary from './CartSummary'
import { useState } from 'react'

function Cart({ cart, onInc, onDec, onRemove,onClear, promoCode,onApplyPromo,onRemovePromo }) {


  const [promoInput, setPromoInput] = useState('')  
  const [promoError, setPromoError] = useState('') 

function handleApplyClick() {
  const result = onApplyPromo(promoInput)
  if (result.ok) {
    setPromoInput('')
    setPromoError('')
  } else {
    setPromoError(result.message)
  }
}

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
 <div className="mt-4">
            {promoCode ? (
              <div className="flex justify-between items-center bg-green-50 border border-green-200 rounded p-2">
                <span className="text-green-700 text-sm font-medium">
                  ✓ {promoCode} applied
                </span>
                <button
                  onClick={onRemovePromo}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    value={promoInput}
                    onChange={(e) => {
                      setPromoInput(e.target.value)
                      if (promoError) setPromoError('')  
                    }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleApplyClick() }}
                    placeholder="Promo code"
                    className="flex-1 border rounded px-2 py-1 text-sm"
                  />
                  <button
                    onClick={handleApplyClick}
                    className="px-3 py-1 bg-gray-800 text-white text-sm rounded hover:bg-gray-700"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-xs text-red-500 mt-1">{promoError}</p>
                )}
              </>
            )}
          </div>




          <CartSummary cart={cart} promoCode={promoCode} />
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