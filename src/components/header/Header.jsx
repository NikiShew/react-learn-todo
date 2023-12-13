import React, { Component } from 'react';
import search from './../../../public/search.png';
import './header.scss';
function Header() {
    return ( 
        <>
            <div>
                <div className="header">
                    <div className="logos-and-Citate">
                        <h1 className='logo'>N.</h1>
                        <h3>Discipline - is the root of all achievement</h3>
                    </div>
                    <div className="inputs">

                        <img src={search} alt="" />
                        <input placeholder='Search...' className='input-header'></input>
                        <button className='search-btn'>Search</button>
                    </div>
                </div>



            </div>
        </>
     );
}

export default Header;