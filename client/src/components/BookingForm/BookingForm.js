import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './BookingForm.css';

function BookingForm() {
  // const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = '';
    if (name === 'phone' && !validatePhone(value)) {
      error = 'Please enter a valid 10-digit phone number';
    } else if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email address';
    } else if (name === 'date' && !validateDate(value)) {
      error = 'Please select a date from today onwards';
    } else {
      error = '';
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateDate = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setLoading(true);
    const formErrors = {};
    if (!validatePhone(formData.phone)) formErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!validateEmail(formData.email)) formErrors.email = 'Please enter a valid email address';
    if (!validateDate(formData.date)) formErrors.date = 'Please select a date from today onwards';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/truckbooking', {
        ...formData,
          phone: `+91${formData.phone}`,
        });

      console.log(response);

      if (response.status === 201) {
        alert('Booking submitted successfully!');
        console.log(response.data);

        // navigate('/create-profile', { state: { userId: data.userId } });

        setFormData({ name: '', email: '', phone: '', service: '', date: '' });
        
        setErrors({});
      } else {
        alert('Error submitting booking. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      // setLoading(false);
    }
  };


  return (
    <section id="booking" className="booking-form">
      <div className="container">
        <h2>Book Your Service</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                handleChange({ target: { name: 'name', value } });
              }}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <div style={{ display: 'flex' }}>
              <span
                style={{
                  padding: '0.5rem',
                  backgroundColor: '#e2e8f0',
                  border: '1px solid #d1d5db',
                  borderRight: 'none',
                  borderRadius: '4px 0 0 4px',
                }}
              >
                +91
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                  handleChange({ target: { name: 'phone', value } });
                }}
                required
                placeholder="10-digit number"
                maxLength="10"
                style={{ borderRadius: '0 4px 4px 0', border: '1px solid #d1d5db' }}
              />
            </div>
            {errors.phone && <span className="error" style={{ color: 'red' }}>{errors.phone}</span>}
          </div>

          {/* Service Dropdown */}
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="city-tempo">City Tempo</option>
              <option value="packers-movers">Packers & Movers</option>
              <option value="enterprise">For Enterprise</option>
              <option value="on-demand">On-Demand</option>
            </select>
          </div>

          {/* Date Field */}
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && <span className="error">{errors.date}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn">Book Now</button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;
