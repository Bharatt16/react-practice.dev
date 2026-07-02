import React from "react";

const Dashboard = () => {
  const user = {
    username: "bharat",
    email: "bharat@gmail.com",
    role: "USER",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Dashboard
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium">{user.username}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium">{user.role}</p>
          </div>
        </div>

        <button
          className="w-full mt-6 rounded-lg bg-red-600 py-2 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;