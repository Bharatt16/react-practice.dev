import type {Product} from "../types/product.ts"

interface ProductCardProps {
    product : Product 
}

export default function ProductCard( { product} : ProductCardProps) {
    return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <span className="category">{product.category}</span>

        <h2>{product.title}</h2>

        <p className="brand">{product.brand}</p>

        <p className="description">
          {product.description.length > 80
            ? product.description.slice(0, 80) + "..."
            : product.description}
        </p>

        <div className="price-rating">
          <span className="price">${product.price}</span>

          <span className="rating">⭐ {product.rating}</span>
        </div>

        <p
          className={
            product.stock > 0 ? "stock available" : "stock unavailable"
          }
        >
          {product.stock > 0
            ? `${product.stock} in stock`
            : "Out of Stock"}
        </p>

        <button>View Product</button>
      </div>
    </div>
  );
}