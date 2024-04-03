//Login Page
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api/login', { email, password });
      console.log('Login Successful', response.data);
      navigate('/some-protected-route');
    } catch (error) {
      console.error('Login failed', error.response.data);
    }
  };

  const navigateToSignupPage = () => {
    navigate('/signup');
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
        <button type="submit" onClick={navigateToSignupPage}>Sign up</button>

      </form>
    </div>
  );
}

export default LoginPage;
