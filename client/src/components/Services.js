import React from 'react';

const services = [
  { icon: 'truck', title: 'City Tempo', description: 'Fast intra-city deliveries' },
  { icon: 'box', title: 'Packers & Movers', description: 'Hassle-free relocation services' },
  { icon: 'building', title: 'For Enterprise', description: 'Tailored logistics solutions' },
  { icon: 'clock', title: 'On-Demand', description: 'Book trucks instantly' },
];

function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <i className={`fas fa-${service.icon} fa-2x`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;