import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <>
        <div className='productCard'>
            <img src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>${product.price}</div>
            <button>Add to cart</button>
        </div>
        </>
    );
}
export default ProductCard;