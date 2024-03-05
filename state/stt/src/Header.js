// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, onSignOut }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {isAuthenticated ? (
            <li><button onClick={onSignOut}>Sign Out</button></li>
          ) : (
            <>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
