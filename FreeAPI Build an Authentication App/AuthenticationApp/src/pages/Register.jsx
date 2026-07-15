import React, { useState} from "react";
import { registerUser } from "../services/auth.js";
import { useNavigate } from  "react-router-dom"


function Register() {

  const navigate = useNavigate();




  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username , email , password , role} = formData

    try {
      if (!username || !email || !password) {
        alert("Please fill all fields")
        return;
      }

      const response = await registerUser(formData);
      console.log(response);

      alert("Registration Successful");
      navigate("/login");

      setFormData({
        username: "",
        email: "",
        password: "",
        role: "USER",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div>Register</div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="username">Username :</label>
          <input
            value={formData.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
          />

          <label htmlFor="email">Email :</label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
          />

          <label htmlFor="password">Password :</label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
          />

          <label htmlFor="role">Role :</label>
          <select
            value={formData.role}
            onChange={handleChange}
            name="role"
            id="role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
