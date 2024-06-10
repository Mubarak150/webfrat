

import { useState, useEffect } from 'react';
import HeroSlide, { slides } from "./HeroSlide"; 
import vector from '/vector.svg';

export default function HeroCarousel() {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const autoScroll = setInterval(() => {
            setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
        }, 3000);

        return () => clearInterval(autoScroll);
    }, []);

    return (
        <div className="overflow-hidden relative md:h-screen w-[99.99%]">
            <div 
                className="flex w-full h-full transition-transform ease-out duration-500" 
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <HeroSlide key={index} heading={s.heading} text={s.text} src={s.src} href={s.href} />
                ))}
            </div>
            
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-2 px-3 rounded-3xl shadow border border-blue hover:bg-gray-50">
                    <img src={vector} alt="Previous" />
                </button>

                <button onClick={next} className="p-2 px-3 rounded-3xl shadow border border-blue hover:bg-gray-50 rotate-180">
                    <img src={vector} alt="Next" />
                </button>
            </div>
        </div>
    );
}



