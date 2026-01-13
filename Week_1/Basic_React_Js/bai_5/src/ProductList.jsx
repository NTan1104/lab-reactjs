import "./ProductList.css";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" },
  { id: 6, name: "Product 6" },
];

export default function ProductList() {
  return (
    <div className="container">
      {products.map((p) => (
        <div className="product" key={p.id}>
          {p.name}
        </div>
      ))}
    </div>
  );
}
