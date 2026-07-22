import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import QuoteCard from "./components/QuoteCard";
import { getQuotes } from "./services/quoteService";
import type { Quote } from "./types/quote";

function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getQuotes();

      setQuotes(response.data.data);
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
    fetchQuotes();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">💬 Random Quotes</h1>

      {loading && <Loader />}

      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <div className="quote-grid">
          {quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;