import React from "react";

export default function Feature (props) {
    return (
        <div onClick={props.onClick} className="flex flex-col flex-1 items-center justify-center text-center bg-gray-100 hover:bg-blue rounded-md group p-4 cursor-pointer">
            
            <img src={props.src } alt='features-icon' className="h-16 w-16 " />    
            
            <h5 className="font-semibold text-small font-poppins text-gray-950 pt-2 pb-4 group-hover:text-white w-2/3">
                {props.heading}
            </h5>
            <div className="">
            <p className="text-gray-950 group-hover:text-white text-justify-md">
                {props.text } <a href="#" className="text-blue group-hover:text-gray-400">   view more </a> 
            </p>
            
            </div>
        </div>
    )
}

const features = [
    {
        id: '1',
        src: '/home/features/web-development.png',
        modelSrc: '/home/modal/web-toggle.svg',
        heading: 'Web development',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        modalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
    },

    {
        id: '2',
        src: '/home/features/app-development.png',
        modelSrc: '/home/modal//app-toggle.svg',
        heading: 'Application Development (iOS and Android)',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ",
        modalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
    
    },

    {
        id: '3',
        src: '/home/features/web-hosting.png',
        modelSrc: '/home/modal//hosting-toggle.svg',
        heading: 'Optimized Web Hosting Services',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ",
        modalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
    
    },

    {
        id: '4',
        src: '/home/features/digital-marketing.png',
        modelSrc: '/home/modal//marketing-toggle.svg',
        heading: 'Digital Marketing and SEO services',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ",
        modalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
    
    }

    
]

export {features}