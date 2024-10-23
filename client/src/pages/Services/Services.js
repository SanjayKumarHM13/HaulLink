import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { 
      title: 'City Tempo', 
      description: 'Fast intra-city deliveries with real-time tracking. Ideal for small businesses and personal use within city limits.', 
      icon: 'fa-truck', 
      capacity: '1-2 tons', 
      price: '₹1000/day',
      availability: 'Available 24/7',
      speed: 'Delivery within 4-6 hours',
      features: ['GPS tracking', 'Doorstep delivery', 'Easy booking']
    },
    { 
      title: 'Packers & Movers', 
      description: 'Hassle-free relocation services for households and offices. Includes packing, moving, and unpacking assistance.', 
      icon: 'fa-box', 
      capacity: '2-3 tons', 
      price: '₹1500/day',
      availability: 'Available on weekends and holidays',
      speed: 'Depends on distance and load',
      features: ['Safe packing', 'Loading/unloading support', 'Insurance coverage']
    },
    { 
      title: 'For Enterprise', 
      description: 'Tailored logistics solutions for large enterprises, with options for bulk deliveries and long-term contracts.', 
      icon: 'fa-building', 
      capacity: '5-10 tons', 
      price: '₹3000/day',
      availability: 'Custom schedules based on requirements',
      speed: 'Customizable delivery times',
      features: ['Bulk shipping discounts', 'Priority support', 'Custom reporting']
    },
    { 
      title: 'On-Demand', 
      description: 'Instant booking of trucks for urgent needs. Perfect for last-minute deliveries or unexpected logistics requirements.', 
      icon: 'fa-clock', 
      capacity: '1-5 tons', 
      price: '₹2000/day',
      availability: 'Available on-demand',
      speed: 'Delivery within 2-4 hours',
      features: ['Instant booking', 'Flexible timings', 'Priority service']
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
                <p><strong>Availability:</strong> {service.availability}</p>
                <p><strong>Speed:</strong> {service.speed}</p>
                <ul>
                  <strong>Features:</strong>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
