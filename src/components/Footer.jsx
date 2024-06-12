import Logo from '/home/navbar/logo.svg'
import fb from '/home/footer/facebook.svg';
import insta from '/home/footer/instagram.svg'
import twitter from '/home/footer/twitter.svg'
import tiktok from '/home/footer/tiktok.svg'
import linkedin from '/home/footer/linkedin.svg'

export default function Footer () {
    return (
        <div className="flex flex-col m-0">
        <div className="bg-slate h-auto w-[99.99%] flex flex-col lg:flex-row gap-9 md:gap-12 md:items-start justify-between mt-16 px-8 md:px-32 py-12 text-white  text-md ">
            <div className="font-thin flex flex-col gap-2 md:gap-4">
                <img src={Logo} alt="" className="h-12 w-20 my-4 md:my-0" />
                <div className="flex gap-5 pb-4">
                    
                    <img src={fb} alt="" className="h-5 cursor-pointer group" />
                    <img src={twitter} alt="" className="h-5 cursor-pointer group" />
                    <img src={insta} alt="" className="h-5 cursor-pointer group" />
                    <img src={linkedin} alt="" className="h-5 cursor-pointer group" />
                    <img src={tiktok} alt="" className="h-5 cursor-pointer group" />
                </div>
                <p className="">omer121323@gmail.com</p>
                <p className="">+923405812282</p>
                <p className="">GT Road Peshawar, hayatabad</p>
            </div>

            <div className='flex flex-col gap-2 md:gap-3'>
                <h4 className='font-bold text-lg'>App</h4>
                <a href='#' className="hover:underline">Home</a>
                <a href='#' className="hover:underline">Services</a>
                <a href='#' className="hover:underline">Skills</a>
                <a href='#' className="hover:underline">Contact us</a>
            </div>
            <div className='flex flex-col gap-2 md:gap-3 m-0 p-0 md:m-0 md:p-0'>
                <h4 className='font-bold text-lg'>Information</h4>
                <p className="hover:underline cursor-pointer">Privacy Policy</p>
                <p className="hover:underline cursor-pointer">Term and Conditions</p>
                
            </div>
            <div className='flex flex-col gap-y-4'>
                <h4 className='font-bold'>Contact us</h4>
                <form action="" className='flex flex-col gap-2'>
                    <input type="mail" name='footer-input' className='px-4 py-4 md:py-2 bg-white text-gray-800 placeholder:gray-200 text-sm rounded-md' placeholder='Fill Your Email' />
                    <button type='submit' className='text-white font-medium bg-blue border border-blue rounded-3xl md:px-24 py-2  hover:text-white hover:bg-slate hover:border hover:border-white  transition-colors duration-300 ease-in-out'>Submit</button>
                </form>
            </div>
            
            </div>
            <div className="bg-slate flex justify-center flex-col md:items-center">
                <div className="w-full md:w-[87%] h-[1px] bg-white justify-self-start "></div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 bg-slate text-white p-4 md:px-32 pt-8 pb-12 md:self-start">
                        <p className="font-rubik text-center lg:text-left">© (2024) Webfrat. All rights reserved.</p>
                        
                    </div>
                </div>
        </div>
    )
}