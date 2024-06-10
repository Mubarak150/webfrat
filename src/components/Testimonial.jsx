import ClientDetails from "./ClientDetails";
import ClientRating from "./ClientRating";


export default function Testimonial (props) {
    return (
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg flex flex-col gap-4 m-2">
            <img src="./Quote.png" alt="img" className="h-10 w-10" />
            <p className="text-[#768D95]">
                {props.text}
            </p>
            <div className="">
                <ClientDetails src={props.src} name={props.name} role={props.role} />
            </div>
            <ClientRating />
        </div>
    )
}

const testimonials = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ex eu odio interdum bibendum sed quis felis.',
        src: './client.png',
        name: 'Mehran',
        role: 'HR Manager'
    },

    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ex eu odio interdum bibendum sed quis felis.',
        src: './client.png',
        name: 'Haseena',
        role: 'SEO Expert'
    },

    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ex eu odio interdum bibendum sed quis felis.',
        src: './client.png',
        name: 'Adnan',
        role: 'CEO'
    },

    {
        text: ' Donec in ex eu odio interdum bibendum sed Lorem ipsum dolor sit amet, consectetur adipiscing elit. quis felis.',
        src: './client.png',
        name: 'Mohsin',
        role: 'Developer'
    },

    {
        text: 'consectetur adipiscing elit. Donec in ex eu odio interdum biben Lorem ipsum dolor sit ametdum sed quis felis.',
        src: './client.png',
        name: 'Shahzaib',
        role: 'Lorem'
    },

    {
        text: 'ng elit. Donec in ex eu odio interdum bibendum sed quLorem ipsum dolor sit amet, consectetur adipisciis felis.',
        src: './client.png',
        name: 'Asif Ali',
        role: 'MD'
    },
]

export {testimonials}