import { useState } from 'react'

import ProductList from './ProductList'
import { products } from "./data/products";
import './App.css'
import Cart from './Cart';

function App() {

const [cart, setCart] = useState([])



function addToCart(product){
  setCart((old)=>{
    const found =old.find((e)=>e.id === product.id)

if(found){
  return old.map((e)=>
  e.id ===product.id ? {...e, qty:e.qty+1}:e)
}
return [...old, {...product,qty:1}]

  })
}



  return (
    <>
        <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductList products={products} onAdd={addToCart} />
        </div>
        <Cart cart={cart} />
      </div>
    </div>

    </>
  )
}

export default App
