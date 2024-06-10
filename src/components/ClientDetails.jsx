import RoundImage from "./RoundImage";

export default function (props) {
    return (
        <div className="flex gap-4 py-2">
            <RoundImage src={props.src} />
            <div className="flex flex-col gap-1">
                <p className="font-bold text-xl text-[#00577F]">{props.name}</p>
                <p className=" text-[#768D95]">{props.role}</p>
            </div>
        </div>
    )
}