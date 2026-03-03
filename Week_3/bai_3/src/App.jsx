import React, { useMemo, useState } from 'react'
const products = Array.from({ length: 3000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  price: Math.floor(Math.random() * 1000)
}));
function App() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = useMemo(() => {
    console.time("Filter time");
    const result = products.filter((product) => {
      const matchName = product.name.toLowerCase().includes(search.toLowerCase());
      const matchMin = minPrice ? product.price >= Number(minPrice) : true;
      const matchMax = maxPrice ? product.price <= Number(maxPrice) : true;
      return matchName && matchMin && matchMax;
    });
    console.timeEnd("Filter time");
    return result;
  }, [search, minPrice, maxPrice])
  const totalPrice = useMemo(() => {
    console.time("Total time");

    const total = filteredProducts.reduce((sum, product) => sum + product.price, 0);
    console.timeEnd("Total time");
    return total;
  }, [filteredProducts]);
  return (
    <div>
      <h2>Product Filter</h2>
      <input placeholder='Search name....' value={search} onChange={(e) => setSearch(e.target.value)} />
      <input type="number" placeholder='Min Price' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
      <input type="number" placeholder='Max Price' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      <h3>Found: {filteredProducts.length} products</h3>
      <h3>Total Price: {totalPrice}</h3>
      <ul>
        {filteredProducts.slice(0, 10).map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
