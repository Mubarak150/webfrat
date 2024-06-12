import { useState, useEffect } from 'react';
import HeroSlide, { slides } from "./HeroSlide"; 
import vector from '/home/hero/vector.svg';

export default function HeroCarousel() {
    const [isHovered, setIsHovered] = useState(false);
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const autoScroll = setInterval(() => {
            if (!isHovered) {
                setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
            }
        }, 5000);

        return () => clearInterval(autoScroll);
    }, [isHovered]);

    return (
        <div className="overflow-hidden relative h-auto md:h-screen w-[99.99%]" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div 
                className="flex w-full h-full transition-transform ease-out duration-500" 
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <HeroSlide
                        key={index}
                        heading={s.heading}
                        text={s.text}
                        src={s.src}
                        href={s.href}
                        isHovered={isHovered} // Pass isHovered state down to each HeroSlide
                    />
                ))}
            </div>
            
            {/* <div className="absolute inset-0 hidden  items-center justify-between p-4"> */}
            <div className="absolute hidden md:inline top-[45%] left-4"> 
                <button onClick={prev} className="p-2 px-3 rounded-3xl shadow border border-blue hover:bg-gray-50">
                    <img src={vector} alt="Previous" />
                </button>
            </div>

            <div className="absolute hidden md:inline top-[45%] right-4">
                <button onClick={next} className="p-2 px-3 rounded-3xl shadow border border-blue hover:bg-gray-50 rotate-180">
                    <img src={vector} alt="Next" />
                </button>
            </div>
        </div>
    );
}
