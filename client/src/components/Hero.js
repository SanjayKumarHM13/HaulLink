import React from 'react';

function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Your Trusted Trucking and Transportation Partner</h2>
        <p className="text-xl mb-8">Fast, reliable, and efficient logistics solutions for your business</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;