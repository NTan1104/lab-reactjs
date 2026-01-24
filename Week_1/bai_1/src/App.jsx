import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard.jsx';
function App() {
  return (
    <div className='product-list'>
      <ProductCard product={{image:'/vite.svg', name:'Product_1', price:1}}></ProductCard>
      <ProductCard product={{image:'/vite.svg', name:'Product_2', price:2}}></ProductCard>
      <ProductCard product={{image:'/vite.svg', name:'Product_3', price:3}}></ProductCard>
    </div>
  );
}

export default App
