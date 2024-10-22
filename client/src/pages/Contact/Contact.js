import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs as they are typed
    let error = '';
    if (name === 'name' && !validateName(value)) {
      error = 'Name should contain only alphabets and spaces';
    } else if (name === 'email' && !validateEmail(value)) {
      error = 'Please enter a valid email address';
    }
    setErrors({ ...errors, [name]: error });
  };

  const validateName = (name) => {
    // Allows only alphabets and spaces
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    // Standard email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if form has errors before submitting
    const formErrors = {};
    if (!validateName(formData.name)) formErrors.name = 'Name should contain only alphabets and spaces';
    if (!validateEmail(formData.email)) formErrors.email = 'Please enter a valid email address';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');

    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We're here to help and answer any question you might have. We look forward to hearing from you!</p>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> 123 Trucking Lane, Logistics City, TC 12345</li>
              <li><i className="fas fa-phone"></i> 1-800-TRUCKPORT</li>
              <li><i className="fas fa-envelope"></i> info@truckport.com</li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // Only allow alphabets and spaces
                handleChange({
                  target: {
                    name: 'name',
                    value,
                  },
                });
              }}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
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
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .error {
          color: red;
          font-size: 0.8em;
          margin-top: 0.2em;
        }
      `}</style>
    </div>
  );
}

export default Contact;
