// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      // Perform authentication and get user data from the server
      const response = await axios.post('http://localhost:8000/userData', {
        email,
        password,
      });

      // Assuming the server returns the user data upon successful login
      const userData = response.data;

      // Call onSignIn with the user data
      onSignIn(userData);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <br />
      <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <br />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Login;
