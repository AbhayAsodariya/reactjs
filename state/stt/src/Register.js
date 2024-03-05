// Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Perform user registration and get user data from the server
      const response = await axios.post('http://localhost:8000/userData', {
        email,
        password,
      });

      // Assuming the server returns the user data upon successful registration
      const userData = response.data;

      // Call onSignUp with the user data
      onSignUp(userData);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <label>Email: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <br />
      <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Register;
