import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slide () {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnHover: true
  };

  return (
    
    <Slider {...settings}>
        {
            heroImages.map((i, index) => ( 
                <img key={index} src={i} alt="image" />
            ))
        }
    </Slider>
  )
}


  // Array of image URLs for the slider
  const heroImages = [
    'slider-image-1.webp',
    'slider-image-2.avif',
    'slider-image-3.webp',
    // future dev: Add more image URLs as needed
  ];

// const Slider = ({ sliderImages }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Function to move to the next slide
//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
//   };

//   // Function to move to the previous slide
//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
//     );
//   };

//   // Auto transition to next slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-[99.999%] h-[91vh] overflow-hidden">
//       {sliderImages.map((image, index) => (
//         <div 
//           key={index}
//           className={`object object-cover absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <img
//             src={image}
//             alt={`Slide ${index}`}
//             className="object-cover w-full h-full"
//           />
//         </div>
//       ))}
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
//         onClick={prevSlide}
//       >
//         Back
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
//         onClick={nextSlide}
//       >
//         Next 
//       </button>
//     </div>
//   );
// };

// export default Slider;
