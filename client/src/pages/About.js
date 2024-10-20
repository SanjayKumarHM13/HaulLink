import React from 'react';

function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About TruckPort</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            TruckPort is a leading trucking and transportation company, dedicated to providing efficient and reliable logistics solutions for businesses of all sizes. With our state-of-the-art fleet and experienced team, we ensure that your goods reach their destination safely and on time.
          </p>
          <p className="mb-4">
            Our mission is to revolutionize the trucking industry by leveraging technology and innovation. We offer a wide range of services, from intra-city deliveries to long-haul transportation, always prioritizing customer satisfaction and operational excellence.
          </p>
          <p>
            At TruckPort, we believe in building lasting relationships with our clients, understanding their unique needs, and delivering tailored solutions that drive their business forward. Choose TruckPort for a seamless, stress-free shipping experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;