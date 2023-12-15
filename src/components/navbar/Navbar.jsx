import React, { Component } from 'react';
import home from './../../../public/home.png';
import group from './../../../public/group.png';
import learn from './../../../public/learn.png';
import chat from './../../../public/chat.png';
import account from './../../../public/account.png';
import setting from './../../../public/setting.png';
import './navbar.scss';
// import WorkSection from '../work-section/WorkSection';
import SettingModal from '../settingModal/SettingModal';
function Navbar() {

    const [ModalActive, setModalActive] = React.useState(false)

    return ( 
        <>
            <div>
                <div className="navbar">
                    <div className="navbar-top">
                            <button className='active'>
                                <img src={home} alt="home-icon" />
                                <h3>home</h3>
                            </button>
                            <button>
                                <img src={chat} alt="home-icon" />
                                <h3>chat</h3>
                            </button>
                            <button>
                                <img src={learn} alt="home-icon" />
                                <h3>learn</h3>
                            </button>
                            <button>
                                <img src={group} alt="home-icon" />
                                <h3>group</h3>
                            </button>
                    </div>            

                    <div className="navbar-bottom">
                            <button onClick={() => setModalActive(true)}>
                                <img src={setting} className='setting-icon' alt="home-icon" />
                            </button>
                            <button>
                                <img src={account} alt="home-icon" />
                            </button>
                    </div>
                </div>
                <SettingModal active={ModalActive} setActive={setModalActive}></SettingModal>
            </div>
        </>
     );
}

export default Navbar;