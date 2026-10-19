import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import Cart from './Cart'
import { products } from './data/products'
import './App.css'


const STORAGE_KEY ='shopping-cart'

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



  function addToCart(product) {
    setCart((old) => {
      const found = old.find((e) => e.id === product.id)

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
      old.map((o) => (o.id === id ? { ...o, qty: o.qty + 1 } : o))
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
    setCart((old) => old.filter((o) => o.id !== id))
  }

  function handleClear(){
    setCart([]);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductList products={products} onAdd={addToCart} />
        </div>
        <Cart
          cart={cart}
          onInc={handleInc}
          onDec={handleDec}
          onRemove={handleRemove}
          onClear={handleClear}
        />
      </div>
    </div>
  )
}

export default App