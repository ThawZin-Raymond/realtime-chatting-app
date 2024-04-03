import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('/api/signup', { username, email, password});
      console.log('Signup successful', response.data);
    } catch (error) {
      console.error("Signup failed", error.response.data ? error.response.data :'Unknown error');
    }
  };

  const navigateToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
        <button type="submit" onClick={navigateToLoginPage}>
          Login
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
