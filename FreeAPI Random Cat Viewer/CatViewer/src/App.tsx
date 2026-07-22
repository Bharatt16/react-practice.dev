import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import CatCard from "./components/CatCard";
import { getRandomCat } from "./services/catService";
import type { Cat } from "./types/cat";

function App() {
  const [cat, setCat] = useState<Cat | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCat = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getRandomCat();

      setCat(response.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">🐱 Random Cat Viewer</h1>

      <button onClick={fetchCat} className="fetch-btn">
        Show Another Cat
      </button>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && cat && (
        <CatCard cat={cat} />
      )}
    </div>
  );
}

export default App;