export default function WhiteBorderButton(props) {
    return(
        <a href={props.href} className="pb-10 md:py-4 ">
        <button className="border-white border-2 rounded-lg text-white tracking-widest font-semibold text-xs md:text-sm font-rubik px-12 md:px-20 py-2 hover:bg-white hover:text-slate transition-colors duration-300 ease-in-out">
            {props.text}
        </button>
 </a>
    )
}