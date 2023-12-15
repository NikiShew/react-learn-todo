import React, { Component } from 'react';
import './checkbox.scss';
import lightTheme from "./../../../../public/light-theme.png"

function Checkbox ({ onCheckboxChange }) {
    const [selectedCheckbox, setSelectedCheckbox] = React.useState('ligth');

    const handleCheckboxChange = (value) => {
      setSelectedCheckbox(value);
      onCheckboxChange(value);
    };


    return (


            <div className={selectedCheckbox === 'dark' ? 'container-themes dark' : 'container-themes light'}>
                <div className='two-themes'>
                    <div className="one">
                        <img src={lightTheme} alt="Image" style={{ width: '100%', marginBottom: '10px' }} />
                        <label>
                            <input
                            type="checkbox"
                            value="checkbox1"
                            checked={selectedCheckbox === 'light'}
                            onChange={() => handleCheckboxChange('light')}
                            />
                            <h3>Light Theme</h3>
                        </label>
                    </div>
                    <div className="two">
                        <img src={lightTheme} alt="Image" style={{ width: '100%', marginBottom: '10px' }} />
                        <label>
                            <input
                            type="checkbox"
                            value="checkbox2"
                            checked={selectedCheckbox === 'dark'}
                            onChange={() => handleCheckboxChange('dark')}
                            />
                        
                            <h3>Dark Theme</h3>
                        </label>
                    </div>
                </div>
            </div>
    )
}

export default Checkbox;