import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { 
      title: 'City Tempo', 
      description: 'Fast intra-city deliveries', 
      icon: 'fa-truck', 
      capacity: '1-2 tons', 
      price: '₹1000/day' 
    },
    { 
      title: 'Packers & Movers', 
      description: 'Hassle-free relocation services', 
      icon: 'fa-box', 
      capacity: '2-3 tons', 
      price: '₹1500/day' 
    },
    { 
      title: 'For Enterprise', 
      description: 'Tailored logistics solutions', 
      icon: 'fa-building', 
      capacity: '5-10 tons', 
      price: '₹3000/day' 
    },
    { 
      title: 'On-Demand', 
      description: 'Book trucks instantly', 
      icon: 'fa-clock', 
      capacity: '1-5 tons', 
      price: '₹2000/day' 
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={`fas ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-details">
                <p><strong>Capacity:</strong> {service.capacity}</p>
                <p><strong>Rental Price:</strong> {service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
