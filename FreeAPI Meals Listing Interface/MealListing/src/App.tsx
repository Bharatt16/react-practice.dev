import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MealCard from "./components/MealCard";
import { getMeals } from "./services/mealService";
import type { Meal } from "./types/meal";

function App() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMeals = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getMeals();

      setMeals(response.data.data);
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
    fetchMeals();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">🍽️ Random Meals</h1>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && (
        <div className="meal-grid">
          {meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;