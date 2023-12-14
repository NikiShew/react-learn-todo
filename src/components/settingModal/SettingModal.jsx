import React, { Component } from 'react';
import close from './../../../public/close.png';
import './settingModal.scss';
function SettingModal({active, setActive, children}) {
    return ( 
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                        <div className='modal-navbar-info'>
                                <div className="modal-navbar">
                                    <button>Theme</button>
                                    <button>Panels</button>
                                    <button>Other</button>
                                    <button>Account</button>
                                    <button>Language</button>
                                </div>
                                <div className="modal-work"></div>
                                <img src={close} className='close' onClick={() => setActive(false)} alt="" />
                        </div>
                        
                </div>
            </div>
        </>
     );
}

export default SettingModal;