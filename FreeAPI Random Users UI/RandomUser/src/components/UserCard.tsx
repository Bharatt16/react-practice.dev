import type { User } from "../types/user";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="user-image"
      />

      <div className="user-info">
        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>

        <p><strong>Gender:</strong> {user.gender}</p>

        <p><strong>Age:</strong> {user.dob.age}</p>

        <p><strong>Email:</strong> {user.email}</p>

        <p><strong>Phone:</strong> {user.phone}</p>

        <p>
          <strong>Location:</strong>{" "}
          {user.location.city}, {user.location.country}
        </p>

        <p><strong>Nationality:</strong> {user.nat}</p>
      </div>
    </div>
  );
}

export default UserCard;