import React, { useState } from 'react';
import axios from 'axios';

function Booking() {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', booking);
      alert('Booking successful!');
      setBooking({ name: '', email: '', phone: '', service: '', date: '' });
    } catch (error) {
      alert('Error making booking. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Book a Service</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={booking.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={booking.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={booking.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 font-bold mb-2">Service</label>
            <select
              id="service"
              name="service"
              value={booking.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a service</option>
              <option value="city-tempo">City Tempo</option>
              <option value="packers-movers">Packers & Movers</option>
              <option value="enterprise">For Enterprise</option>
              <option value="on-demand">On-Demand</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={booking.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;