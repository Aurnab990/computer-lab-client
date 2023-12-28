// Modal.js

import React from 'react';

const Modal = ({ isOpen, onClose, title, content }) => {
  return (
    <div className={`modal ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="modal-close cursor-pointer z-50" onClick={onClose}>
            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M6.3 4.7l-1.6 1.6L9 9l-4.3 4.3 1.6 1.6L10 10l4.3 4.3 1.6-1.6L11.6 9l4.3-4.3-1.6-1.6L10 7.4 5.7 3.1z"></path>
            </svg>
          </div>

          <div className="modal-title text-2xl font-semibold mb-4">{title}</div>
          <div className="modal-body">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
