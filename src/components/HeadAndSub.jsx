import React from "react";

export default function HeadAndSub (props) {
    return (
            <div className="flex flex-col justify-center items-center gap-1  ">
                <p className="text-blue md:text-[24px] ">{props.sub}</p>
                <h3 className="font-rubik text-xl md:text-[50px] font-semibold text-gray-900 leading-9">{props.head}</h3>
            </div>
        
        
    )
}