import WhiteBorderButton from "./WhiteBorderButton";
import Dev from '/web-hero.svg'

export default function HeroSlide(props) {
    return(
        <div className="flex flex-col md:flex-row bg-slate text-white w-[99.99%] flex-shrink-0 h-auto  md:h-[88%] items-center justify-center ">
            <div className="flex flex-col justify-center md:w-2/5  py-8 text-center md:text-left">
                <h1 className="font-medium text-5xl font-rubik">{props.heading}</h1>
                <p className="text-gray-300 py-6 text-[16px] md:text-[18px]" >{props.text}</p>
                <div className="hidden md:inline">
                <WhiteBorderButton text='EXPLORE' href={props.href} />
            </div>
            </div>
            <div className="h-full flex justify-center items-center">
                <img src={props.src} alt="" className="h-4/5" />
            </div>
            <div className="md:hidden w-full flex justify-center items-center">
                <WhiteBorderButton text='EXPLORE' href={props.href} />
            </div>
        </div>
    )
}

const slides = [
    {
        heading: 'Web development',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/web-hero.svg',
        href: '#',
    },

    {
        heading: 'Application Development (iOS and Android)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/app-hero.svg',
        href: '#',
    },

    {
        heading: 'Optimized Web Hosting Services',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/hero-hosting.svg',
        href: '#',
    },

    {
        heading: 'Digital Marketing and SEO services',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/hero-marketing.svg',
        href: '#',
    }
]

export {slides}; 