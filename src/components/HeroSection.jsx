import React from 'react';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';

const HeroSection = () => {
  return (
    <section className="block">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

