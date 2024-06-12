import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import cross from '/home/modal/cross.svg';
import WhiteBorderButton from './WhiteBorderButton';

const AdvModal = ({ isOpen, onClose, id, modelSrc, heading, modalText }) => {
  useEffect(() => {
    // Custom animations or focus management can be added here
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="modal-content bg-slate text-white px-4 md:px-8 py-4 rounded-2xl shadow-lg flex flex-col md:flex-row gap-4 items-center relative w-4/5 h-4/5 lg:h-auto overflow-y-scroll overflow animate-slide-up">
        <button onClick={onClose} className="absolute top-6 right-6">
          <img src={cross} alt="" className="" />
        </button>
        
        <img src={modelSrc} alt="pic" className="h-full md:h-2/3 w-4/5 md:w-2/5" />
        <div className="flex flex-col gap-4 p-4">
          <p className='font-bold text-lg md:text-3xl pb-2'>{heading}</p>
          <p className=''>{modalText}</p>
          <div className="flex items-center justify-center md:items-start md:justify-normal">
            <WhiteBorderButton text='READ MORE' href='#' />
          </div>
          
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AdvModal;
