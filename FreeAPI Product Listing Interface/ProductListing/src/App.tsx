import { useEffect, useState } from "react";
import type { Product, ProductResponse } from "./types/product.ts";
import { getProducts } from "./services/productService.ts";
import Loader from "./components/Loader.tsx";
import ErrorMessage from "./components/ErrorMessage.tsx";
import ProductCard from "./components/ProductCard";

function App() {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response: ProductResponse = await getProducts();
      setProduct(response.data.data);
    } catch (err) {
      console.log(`ERROR : ${err}`);
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">🛒 Product Store</h1>

      {loading && <Loader />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <div className="product-grid">
          {product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
