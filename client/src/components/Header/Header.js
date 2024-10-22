import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [showLogin, setShowLogin] = useState(true); // Manage login button visibility
  const location = useLocation(); // Detect the current route

  // Hide login button when navigating to the "/login" route
  useEffect(() => {
    if (location.pathname === '/login') {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }, [location]);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">TruckPort</Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {showLogin && (
            <div className="login-button-container">
              <Link to="/login" className="btn login-btn">
                Login
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
