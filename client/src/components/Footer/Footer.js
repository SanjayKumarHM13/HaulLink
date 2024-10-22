import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TruckPort</h3>
            <p>Your trusted partner in trucking and transportation</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Phone: 1-800-TRUCKPORT</p>
            <p>Email: info@truckport.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 TruckPort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;