
import './App.css'
import ProductCard from './ProductCard.jsx';

function App() {

  return (
    <div>
      <ProductCard image="/images/product1.png" name="Product 1" price={1} />
      <ProductCard image="/images/product2.png" name="Product 2" price={2} />
      <ProductCard image="/images/product3.png" name="Product 3" price={3} />
    </div>
  )
}

export default App;
