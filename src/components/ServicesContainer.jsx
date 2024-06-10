import {useState} from "react";
import Feature, {features} from "./Feature";
import HeadAndSub from "./HeadAndSub";
import AdvModal from './AdvModal';

export default function ServicesContainer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState('');
    const [modelSrc, setModelSrc] = useState('');
    const [heading, setHeading] = useState('');
    const [modalText, setModalText] = useState('');

    const openModal = (id, modelSrc, heading, modalText) => {
        setIsModalOpen(true);
        setId(id)
        setHeading(heading)
        setModalText(modalText)
        setModelSrc(modelSrc)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="flex flex-col justify-center align-center h-screen w-full font-poppins md:p-28 box-border md:py-32 xl:px-36 mt-60 md:mt-0">
            {/* returning heading and sub-heading */}
            <HeadAndSub head='Provided Features' sub='Our Services' />

            {/* RETURNING ALL THE AVAILABLE FEATURES.... */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-3 m-4 md:m-0 p-4 md:p-0 md:gap-4 mt-8 md:mt-20">
                {features.map((feature, index) => (
                    <Feature onClick={() => openModal(feature.id, feature.modelSrc, feature.heading, feature.modalText)} key={index} src={feature.src} heading={feature.heading} text={feature.text}  />
                ))}
            </div>

            <AdvModal id={id} modelSrc={modelSrc} heading={heading} modalText={modalText} isOpen={isModalOpen} onClose={closeModal} />
     
        </div>
    )
}


