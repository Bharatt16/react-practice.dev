import React , {useState} from "react";

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
    
      const handleSubmit = (e)=>{
        e.preventDefault()
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
