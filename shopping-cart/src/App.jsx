import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import { products } from './data/products'
import { PROMOS } from './data/promos'
import './App.css'


const STORAGE_KEY ='shopping-cart'
const PROMO_KEY='shopping-cart-promo'

function App() {
  const [cart, setCart] = useState(()=>{



try{
  const raw=localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw):[]
} catch{ return []}

  })

  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  },[cart])


  //Promo 

  const [promoCode,setPromoCode]=useState(()=>{

    try{
      const raw= localStorage.getItem(PROMO_KEY)
      return raw || null
    }catch{return null}
  })

  useEffect(()=>{
    if(promoCode){
      localStorage.setItem(PROMO_KEY,promoCode)
    }else{
      localStorage.removeItem(PROMO_KEY)
    }
  },[promoCode])


   function applyPromo(code) {
    const normalized = code.trim().toUpperCase()
    if (PROMOS[normalized]) {
      setPromoCode(normalized)
      return { ok: true }
    }
    return { ok: false, message: 'Invalid promo code' }
  }

  function removePromo() {
    setPromoCode(null)
  }


  function addToCart(product) {
    setCart((old) => {
      const found = old.find((e) => e.id === product.id)
      const currentQty=found ? found.qty :0

      if(currentQty>= product.stock) return old

      if (found) {
        return old.map((e) =>
          e.id === product.id ? { ...e, qty: e.qty + 1 } : e
        )
      }

      return [...old, { ...product, qty: 1 }]
    })
  }

 function handleInc(id) {
  setCart((old) =>
    old.map((o) => {
      if (o.id !== id) return o
      if (o.qty >= o.stock) return o 
      return { ...o, qty: o.qty + 1 }
    })
  )
}

  function handleDec(id) {
    setCart((old) =>
      old
        .map((o) => (o.id === id ? { ...o, qty: o.qty - 1 } : o))
        .filter((o) => o.qty > 0)
    )
  }

function handleRemove(id) {
  const next = cart.filter((o) => o.id !== id)
  setCart(next)
  if (next.length === 0) setPromoCode(null)
}

  function handleClear(){
    setCart([]);
    setPromoCode(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductList products={products} onAdd={addToCart} cart={cart} />
        </div>
        <Cart
          cart={cart}
          onInc={handleInc}
          onDec={handleDec}
          onRemove={handleRemove}
          onClear={handleClear}
          promoCode={promoCode}
          onApplyPromo={applyPromo}
          onRemovePromo={removePromo}
        />
      </div>
    </div>
  )
}

export default App