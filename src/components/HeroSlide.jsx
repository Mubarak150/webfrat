import WhiteBorderButton from "./WhiteBorderButton";


export default function HeroSlide(props) {
    return(
        <div onHover={props.onHover} className="flex flex-col  md:flex-row bg-slate text-white w-[99.99%] flex-shrink-0 h-auto  md:h-[88%] items-center justify-center ">
            <div className="flex flex-col justify-center p-6 md:p-0 md:w-2/5  py-8 text-center md:text-left">
                <h1 className="font-medium text-3xl md:text-3xl lg:text-5xl s font-rubik">{props.heading}</h1>
                <p className="text-gray-300 py-6 text-[16px] md:text-[] lg:text-[18px]" >{props.text}</p>
                <div className="hidden md:inline">
                <WhiteBorderButton text='EXPLORE' href={props.href} />
            </div>
            </div>
            <div className="h-full flex justify-center items-center">
                <img src={props.src} alt="" className="h-4/5 md:h-3/5 lg:h-4/5" />
            </div>
            <div className="md:hidden w-full flex justify-center items-center gorup">
                <WhiteBorderButton text='EXPLORE' href={props.href} />
            </div>
        </div>
    )
}

const slides = [
    {
        heading: 'Web development',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/home/hero//web-hero.svg',
        href: '#',
    },

    {
        heading: 'Application Development (iOS and Android)',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/home/hero//app-hero.svg',
        href: '#',
    },

    {
        heading: 'Optimized Web Hosting Services',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/home/hero//hero-hosting.svg',
        href: '#',
    },

    {
        heading: 'Digital Marketing and SEO services',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        src: '/home/hero/hero-marketing.svg',
        href: '#',
    }
]

export {slides}; 