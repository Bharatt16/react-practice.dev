import { useEffect, useState } from "react";
import JokeCard from "./components/JokeCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { getRandomJokes } from "./services/jokeService";
import type { Joke } from "./types/joke";

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getRandomJokes();
      const jokes = response.data.data;

      if (jokes.length === 0) {
        throw new Error("No jokes available.");
      }

      const randomIndex = Math.floor(Math.random() * jokes.length);
      // console.log(jokes[randomIndex]);
      // console.log(jokes)
      setJoke(jokes[randomIndex]);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to fetch the joke. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  const copyJoke = async () => {
    if (!joke) return;

    try {
      await navigator.clipboard.writeText(joke.content);
      alert("Joke copied to clipboard!");
    } catch {
      alert("Failed to copy joke.");
    }
  };

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <div>
          {joke && (
            <JokeCard joke={joke} onCopy={copyJoke} />
          )}

          <button
            onClick={fetchJoke}
            style={{ marginTop: "1rem" }}
          >
             Next Joke
          </button>
        </div>
      )}
    </div>
  );
}

export default App;