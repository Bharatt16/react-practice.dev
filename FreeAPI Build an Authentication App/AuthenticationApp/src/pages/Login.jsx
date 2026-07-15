import React , {useState} from "react";
import { loginUser } from "../services/auth.js";
import { useNavigate } from  "react-router-dom"

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      const handleSubmit = async(e)=>{
        e.preventDefault();

        const { username , password} =  formData

       try {
        if(!username || !password) {
            alert("Please fill all fields")
            return
        }

        const response = await loginUser(formData)
        console.log(response)

        localStorage.setItem("accessToken", response.data.accessToken)
        console.log(`Access Token : ${localStorage.getItem("accessToken")}`)
        alert("Login Successful")
        navigate('/dashboard')

        setFormData({
            username : "",
            password : ""
        })

       } catch (error) {
        console.error(error)
       }

      }
    
      
      const handleChange = (e)=>{
    
        const { name , value } = e.target
        setFormData((prev)=>({
            ...prev ,
            [name] : value,
        }))
    }



  return (
    <>
      <div>Login</div>

      <form action="" onSubmit={handleSubmit}>
      <label htmlFor="username">Username :</label>
          <input
            value={formData.username}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
          />

        <label htmlFor="password">Password :</label>
        <input
          value={formData.password}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
