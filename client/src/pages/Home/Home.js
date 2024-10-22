import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import BookingForm from '../../components/BookingForm/BookingForm';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* <Link to="/login" className="login-button">Login</Link> */}
      <Hero />
      <Services />
      {/* <BookingForm /> */}
    </div>
  );
}

export default Home;