import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Your Trusted Trucking and Transportation Partner</h1>
        <p>Fast, reliable, and efficient logistics solutions for your business</p>
        <Link to="/booking" className='btn'>Book now</Link>
      </div>
    </section>
  );
}

export default Hero;