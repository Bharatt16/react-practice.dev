import type { Cat } from "../types/cat";

interface CatCardProps {
  cat: Cat;
}

function CatCard({ cat }: CatCardProps) {
  return (
    <div className="cat-card">
      <img
        src={cat.image.url}
        alt={cat.name}
        className="cat-image"
      />

      <div className="cat-info">
        <h2>{cat.name}</h2>

        <p>
          <strong>Origin:</strong> {cat.origin}
        </p>

        <p>
          <strong>Life Span:</strong> {cat.life_span} years
        </p>

        <p>
          <strong>Temperament:</strong> {cat.temperament}
        </p>

        <p className="description">
          {cat.description}
        </p>

        <div className="ratings">
          <span>{cat.affection_level}/5</span>
          <span>{cat.intelligence}/5</span>
          <span>{cat.energy_level}/5</span>
        </div>
      </div>
    </div>
  );
}

export default CatCard;