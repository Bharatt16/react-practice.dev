import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import UserCard from "./components/UserCard";
import { getUsers } from "./services/userService";
import type { User } from "./types/user";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getUsers();

      setUsers(response.data.data);
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
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">👥 Random Users</h1>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message={error} />
      )}

      {!loading && !error && (
        <div className="user-grid">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;