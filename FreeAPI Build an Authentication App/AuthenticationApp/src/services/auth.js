import axios from "axios";

const BASE_URL = "https://api.freeapi.app/api/v1/users";

const auth = axios.create({
  baseURL: BASE_URL,
  // withCredentials : true
});

export const registerUser = async (userData) => {
  const response = await auth.post("/register", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await auth.post("/login", userData);
  return response.data;
};

export const getCurrentUser = async (userData) => {
  const response = await auth.get("/current-user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};

export const logoutUser = async () => {
  const response = await auth.post("/logout" , {} , {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return response.data;
};
