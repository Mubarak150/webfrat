import React from 'react';
import Slide from './Slide';
import Navbar from './Navbar';
import HeroSlide from './HeroSlide';
import HeroCarousel from './HeroCarousel';
import WhiteBorderButton from './WhiteBorderButton';

const HeroSection = () => {


  return (
    <div className="h-screen">
      <Navbar />
      <HeroCarousel />
      <div className="md:hidden">
        <WhiteBorderButton />
      </div>
      
    </div>
  );
};

export default HeroSection;
