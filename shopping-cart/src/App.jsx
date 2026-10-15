import { useState } from 'react'
import ProductCard from './ProductCard'
import ProductList from './ProductList'
import { products } from "./data/products";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
     
      <ProductList products={products} onAdd={() => {}} />
    </div>
    </>
  )
}

export default App
