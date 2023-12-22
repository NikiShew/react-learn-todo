import React, { Component } from 'react';
import './workSections.scss';
import CurrentDate from './CurrentDate';
export default function LiItem(props) {

    
    return (           
    <li className='todo' key={props.index}>
        <h3 className='todo-info'>{props.item}</h3>
        <div className="btn-bck">
            <button className='finish'>finish</button>
            {/* <button className='in_process'>In Process</button> */}
            {props.children}
            <CurrentDate />
        </div>
    </li>
)


}

