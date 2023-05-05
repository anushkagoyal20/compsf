import ReactDOM from 'react-dom';
import {useState} from 'react';

function Modal({onClose, children, actionBar}){
    return ReactDOM.createPortal(
        <div>
        <div onClick={onClose} className = "absolute inset-0 bg-gray-300 opacity-80"></div>
        <div className = "absolute inset-40 p-10 bg-white">
            {/* this div represents in the middle of the screen */}
            <div className = "flex flex-col justify-between h-full">
                {children}
                <div className = "flex justify-end">
                {actionBar}
                </div>
                
            </div>
        </div>
        </div>, 
        document.querySelector('.modal-container')
    );

    return 
}

export default Modal;