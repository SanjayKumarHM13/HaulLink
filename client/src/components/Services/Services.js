import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { title: 'City Tempo', description: 'Fast intra-city deliveries', icon: 'fa-truck' },
    { title: 'Packers & Movers', description: 'Hassle-free relocation services', icon: 'fa-box' },
    { title: 'For Enterprise', description: 'Tailored logistics solutions', icon: 'fa-building' },
    { title: 'On-Demand', description: 'Book trucks instantly', icon: 'fa-clock' },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;