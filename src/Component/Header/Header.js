import React from 'react';
import logo from '../../logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header-class">
            <div className="logo" style={{display:'flex'}}><img src={logo} alt=""/> <h3>Provati Sporting Club</h3></div>
            <div className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Our Club</a></li>
                    <li><a href="">Our Players</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;