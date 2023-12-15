import React, { Component } from 'react';
import close from './../../../public/close.png';
import Checkbox from './checkbox/Checkbox';


import './styles-light.scss';
import './settingModal.scss';
function SettingModal({active, setActive, children}) {
    const [activeButton, setActiveButton] = React.useState(null);
    const [selectedCheckbox, setSelectedCheckbox] = React.useState(null);
    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };
    const handleCheckboxChange = (value) => {
        setSelectedCheckbox(value);
      };

    
    return ( 
        <>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                        <div className='modal-navbar-info'>
                                <div className="modal-navbar">
                                    <button onClick={() => handleButtonClick('Theme')}>Theme</button>
                                    <button onClick={() => handleButtonClick('Panels')}>Panels</button>
                                    <button onClick={() => handleButtonClick('Other')}>Other</button>
                                    <button onClick={() => handleButtonClick('Account')}>Account</button>
                                    <button onClick={() => handleButtonClick('Language')}>Language</button>
                                </div>
                                <div className="modal-work">
                                    {activeButton === 'Theme' && <div className= {selectedCheckbox === "dark" ? "theme dark" : 'theme light'}>
                                            <h1>{activeButton}</h1>
                                            <Checkbox onCheckboxChange={handleCheckboxChange}/>
                                    </div>}
                                    {activeButton === 'Panels' && <div>panels</div>}
                                    {activeButton === 'Other' && <div>Content for Other</div>}
                                    {activeButton === 'Account' && <div>Content for Account</div>}
                                    {activeButton === 'Language' && <div>Content for Language</div>}
                                </div>
                                <img src={close} className='close' onClick={() => setActive(false)} alt="" />
                        </div>
                        
                </div>
            </div>
        </>
     );
}

export default SettingModal;