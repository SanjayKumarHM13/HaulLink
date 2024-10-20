import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contact', message);
      alert('Message sent successfully!');
      setMessage({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={message.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div  className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={message.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={message.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={message.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;