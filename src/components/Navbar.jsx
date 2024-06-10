import { useState } from 'react';
// import { useInView } from 'react-hook-inview'
// import classNames from 'classnames';
import PrimaryButton from "./PrimaryButton";
import Logo from "/logo.svg"





function Navbar () {
// const [navbarRef,  navbarIsVisible ] = useInView ();

const [isHidden, setIsHidden] = useState(true);
function handleToggle () {
    if(isHidden) {
        setIsHidden(false)
    } else {
        setIsHidden(true)
    }
}

return (
    
  
    <nav className={`border-box animate relative w-full flex items-center py-12 md:py-5 px- md:px-[160px] nav-items backdrop-blur-sm bg-slate text-white h-20 font-poppins`}>

        {/* COMPANY LOGO */}
        <a href="/" className="h-[33px] w-[58px] pl-8 md:pl-0 flex-grow flex justify-start align-center">
            <img src={Logo} alt="" className='h-12 w-16' />
        </a>
        

        

        {/* navbar burger and links for mobile */}

        <div onClick={handleToggle} className="md:hidden m-0 p-0 z-10">
            <svg className=" h-12" viewBox="-2.4 -2.4 28.80 28.80" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#47484b"></path> </g></svg>
        </div>

        <div className={` ${isHidden ? 'hidden opacity-0 transform -translate-y-10' : 'flex opacity-100 transform translate-y-0'} z-10 transition-all duration-700 absolute top-20 left-1  justify-center items-center w-screen`}>
                <a href="/about" className="block md:hidden px-3 border border-primary text-[14px] text-primary hover:bg-primary hover:text-white p-1 mx-1 font-teachers transition-all duration-2000 ">About</a>
                <a href="/#projects" className="block md:hidden px-3 border border-primary text-[14px] text-primary hover:bg-primary hover:text-white p-1 mx-1 font-teachers transition-all duration-2000">Projects</a>
                <a href='/contact' className="block md:hidden px-3 border border-primary text-[14px] text-primary hover:bg-primary hover:text-white p-1 mx-1 font-teachers transition-all duration-2000">Contact</a>           
        </div>
        
        
        <div className='flex justify-end'>
        {/* NAVBAR LINKS for laptop */}
        <div className="p-0 m-0  h-full ">
            <div className="pl-12 flex gap-12">
                <a href="/#home" className="hidden md:inline text-[16px] text-primary hover:font-semibold p-1  font-teachers transition-all duration-2000">Home</a>
                <a href="/#services" className="hidden md:inline text-[16px] text-primary hover:font-semibold p-1  font-teachers transition-all duration-2000 duration-200">Services</a>
                <a href="/#projects" className="hidden md:inline text-[16px] text-primary hover:font-semibold p-1  font-teachers transition-all duration-2000">Skills</a>
                <a href='/contact' className="hidden md:inline text-[16px] text-primary hover:font-semibold p-1  font-teachers transition-all duration-2000">Contact</a>
               
            
            </div> 
        </div>
        {/* contact BUTTON */}
        <div className='hidden md:flex pl-[140px]  gap-5'>
            <a href="/contact" className="hidden md:inline">
                <PrimaryButton text="Sign up"  buttonClass="bg-white text-blue hover:text-white hover:bg-slate border hover:border-white  transition-colors duration-300 ease-in-out" /> 
            </a>

            <a href="/contact" className="hidden md:inline ">
                <PrimaryButton text="Sign in"  buttonClass="border border-white text-white hover:bg-white hover:text-blue  transition-colors duration-300 ease-in-out" /> 
            </a>
        </div>
        </div>
        
        
    </nav>
 
);

} 


export default Navbar; 