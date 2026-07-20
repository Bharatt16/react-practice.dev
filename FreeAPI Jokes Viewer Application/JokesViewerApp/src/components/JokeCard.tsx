import type { Joke } from "../types/joke";

interface JokeCardProps {
  joke: Joke;
  onCopy: () => void;
}

function JokeCard({ joke, onCopy }: JokeCardProps) {
  return (
    <div className="card">
      <h1>Random Joke</h1>

      <p className="subtitle">Here's something to make you smile!</p>

      <div className="profile-item">
        <h2>ID: {joke.id}</h2>
        <p>{joke.content}</p>
      </div>

      {joke.categories.length > 0 && (
        <div className="profile-item">
          <span>Category</span>
          <p>{joke.categories.join(", ")}</p>
        </div>
      )}

      <button onClick={onCopy}>Copy Joke</button>
    </div>
  );
}

export default JokeCard;
