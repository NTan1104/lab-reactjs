import React from 'react'
import './ProductList.css'
function ProductList() {
    const products = [
        {id:1, name: 'Product 1', price: '$10'},
        {id:2, name: 'Product 2', price: '$20'},
        {id:3, name: 'Product 3', price: '$30'},
        {id:4, name: 'Product 4', price: '$40'},
        {id:5, name: 'Product 5', price: '$50'},
        {id:6, name: 'Product 6', price: '$60'},
    ]
  return (
    <div className='product-grid'>
        {products.map(p => (
            <div key={p.id} className='product-card'>
                <h3>{p.name}</h3>
                <p>{p.price}</p>
            </div>
        ))}
      
    </div>
  )
}

export default ProductList
