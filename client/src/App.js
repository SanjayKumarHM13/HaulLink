import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';
import CreateProfile from './components/CreateProfile/CreateProfile';
import './App.css';
import BookingForm from './components/BookingForm/BookingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;