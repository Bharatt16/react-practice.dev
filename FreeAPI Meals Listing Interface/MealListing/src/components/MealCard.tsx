import type { Meal } from "../types/meal";

interface MealCardProps {
  meal: Meal;
}

function MealCard({ meal }: MealCardProps) {
  return (
    <div className="meal-card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-image"
      />

      <div className="meal-info">
        <span className="category">{meal.strCategory}</span>

        <h2>{meal.strMeal}</h2>

        <p className="area">{meal.strArea} Cuisine</p>

        <p className="description">
          {meal.strInstructions.length > 120
            ? meal.strInstructions.slice(0, 120) + "..."
            : meal.strInstructions}
        </p>

        <div className="meal-footer">
          {meal.strTags && (
            <span className="tags">
              🏷️ {meal.strTags.split(",")[0]}
            </span>
          )}

          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn"
          >
            Watch Recipe
          </a>
        </div>
      </div>
    </div>
  );
}

export default MealCard;