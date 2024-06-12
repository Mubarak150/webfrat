import { useState } from 'react';
import burger from '/home/navbar/burger.svg';
import PrimaryButton from "./PrimaryButton";
import Logo from "/home/navbar/logo.svg";

function Navbar() {
    const [isHidden, setIsHidden] = useState(true);
    
    function handleToggle() {
        setIsHidden(!isHidden);
        // Toggle class on hero section to push it down
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            if (isHidden) {
                heroSection.classList.add('mt-56');  // Adjust the value as needed
            } else {
                heroSection.classList.remove('mt-56');
            }
        }
    }

    return (
        <nav className="relative z-20 border-box animate w-full flex items-center py-5 px-4  lg:px-[100px] nav-items backdrop-blur-sm bg-slate text-white h-20 font-poppins">

            {/* COMPANY LOGO */}
            <a href="/" className="flex-shrink-0 pl-4  lg:pl-0">
                <img src={Logo} alt="" className='h-8 md:h-12 w-12 md:w-16' />
            </a>

            <div className="flex-grow"></div> {/* Spacer to push the burger icon to the right but not functional now.  */}

            {/* Navbar burger and links for mobile */}
            <div onClick={handleToggle} className="md:hidden cursor-pointer">
                <img src={burger} alt="Menu" className="h-8 w-8" />
            </div>

            {/* Mobile menu */}
            <div className={`absolute top-20 left-0 w-full bg-slate ${isHidden ? 'hidden' : 'flex'} flex-col items-center transition-all duration-2000 z-30 pb-6`}>
                <a href="/" className="block md:hidden px-3 text-lg text-primary hover:bg-primary  p-1 mx-1 font-teachers transition-all duration-2000  hover:text-gray-300 hover:font-semibold hover:tracking-widest">Home</a>
                <a href="/#services" className="block md:hidden px-3 text-lg text-primary hover:bg-primary  p-1 mx-1 font-teachers transition-all duration-2000 hover:text-gray-300 hover:font-semibold hover:tracking-widest">Services</a>
                <a href='/#skills' className="block md:hidden px-3 text-lg text-primary hover:bg-primary  p-1 mx-1 font-teachers transition-all duration-2000 hover:text-gray-300 hover:font-semibold hover:tracking-widest">Skills</a>
                <a href='/contact' className="block md:hidden px-3 text-lg text-primary hover:bg-primary  p-1 mx-1 font-teachers transition-all duration-2000 hover:text-gray-300 hover:font-semibold hover:tracking-widest">Contact</a>
                
                    <a href="/contact" className="md:hidden w-full px-3 py-2">
                        <PrimaryButton text="Sign up" buttonClass="bg-white text-blue hover:text-white hover:bg-slate border hover:border-white transition-colors duration-300 ease-in-out w-full py-3 text-lg" />
                    </a>
                
                <a href="/contact" className="md:hidden w-full px-3 py-2">
                    <PrimaryButton text="Sign in" buttonClass="border border-white text-white hover:bg-white hover:text-blue transition-colors duration-300 ease-in-out w-full py-3" />
                </a>
            
            </div>

            <div className='hidden md:flex justify-end w-full'>
                {/* NAVBAR LINKS for laptop */}
                <div className="hidden md:flex gap-6 lg:gap-10">
                    <a href="/home" className="text-[19px] text-primary hover:font-semibold p-1 font-teachers transition-all duration-2000">Home</a>
                    <a href="/#services" className="text-[19px] text-primary hover:font-semibold p-1 font-teachers transition-all duration-2000 ">Services</a>
                    <a href="/#skills" className="text-[19px] text-primary hover:font-semibold p-1 font-teachers transition-all duration-2000 ">Skills</a>
                    <a href='/contact' className="text-[19px] text-primary hover:font-semibold p-1 font-teachers transition-all duration-2000 ">Contact</a>
                </div>

                {/* contact BUTTON */}
                <div className='hidden md:flex pl-6 lg:pl-[60px] xl:pl-[170px] gap-5'>
                    <a href="/contact" className="hidden md:inline">
                        <PrimaryButton text="Sign up" buttonClass="bg-white text-blue hover:text-white hover:bg-slate border hover:border-white transition-colors duration-300 ease-in-out" />
                    </a>
                    <a href="/contact" className="hidden md:inline">
                        <PrimaryButton text="Sign in" buttonClass="border border-white text-white hover:bg-white hover:text-blue transition-colors duration-300 ease-in-out" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
