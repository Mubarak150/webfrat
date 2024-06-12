import star from '/home/testimonial/star.svg'

export default function ClientRating () {
    return (
        <div className="flex flex-col md:flex-row  md:items-center md:justify-between">
            <ul className="flex gap-1 md:items-center md:justify-center decoration-none">
                <li className="flex gap-1">
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                    <img src={star} alt="" className="" />
                </li>
                
            </ul>
            <div className="text-[#768D95] text-sm pt-2 lg:pt-0">Reviewed on 12/2/2024</div>
        </div>
    )
}