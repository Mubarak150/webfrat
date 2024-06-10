import React from 'react';
import HeadAndSub from "./HeadAndSub";
import Testimonial, { testimonials } from "./Testimonial";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from './useWindowSize'; // measuring window width to show number of slides accordingly. 

export default function TestimonialContainer() {
  const { width } = useWindowSize();

  // Define the number of slides to show based on the screen width
  const slidesToShow = width >= 1024 ? 3 : width >= 600 ? 2 : 1;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnHover: true
  };

  return (
    <div className="flex flex-col justify-center align-center h-auto md:h-screen w-full font-poppins p-4 mt-60 md:mt-0 md:p-32 box-border xl:px-36 relative testimonial-container">
      <HeadAndSub head='What Others Say?' />
      <p className="mt-4 md:mt-10 p-3 md:p-0 text-[#768D95] font-rubik leading-relaxed text-center text-[21px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div className="slider-container mt-10">
        <Slider {...settings}>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} > {/* Added padding to center the slides */}
                <Testimonial src={testimonial.src} name={testimonial.name} role={testimonial.role} text={testimonial.text} />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}
