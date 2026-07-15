import React, { useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/auth.js";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader.jsx";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await getCurrentUser();
      console.log("Response : ", response);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    console.log(`Access Token : ${localStorage.getItem("accessToken")}`);
    await logoutUser();
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>

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
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
};

export default Dashboard;
