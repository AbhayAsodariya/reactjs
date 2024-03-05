// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleSignIn = (userData) => {
    setAuthenticated(true);
    // Save user data to localStorage or a global state management solution
    // For simplicity, we're not handling token-based authentication here.
  };

  const handleSignUp = (userData) => {
    setAuthenticated(true);
    // Save user data to localStorage or a global state management solution
    // For simplicity, we're not handling token-based authentication here.
  };

  const handleSignOut = () => {
    setAuthenticated(false);
    // Remove user data from localStorage or a global state management solution
    // For simplicity, we're not handling token-based authentication here.
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
