import star from '/star.svg'

export default function ClientRating () {
    return (
        <div className="flex items-center justify-between">
            <ul className="flex gap-1 items-center justify-center decoration-none">
                <li className="flex gap-1">
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                </li>
                
            </ul>
            <div className="text-[#768D95] text-sm">Reviewed on 12/2/2024</div>
        </div>
    )
}