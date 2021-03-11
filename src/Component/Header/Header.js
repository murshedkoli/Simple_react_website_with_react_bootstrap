import React from 'react';
import logo from '../../logo.png';
import './Header.css';
import {Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header-class">
        {/* //     <div className="logo" style={{display:'flex'}}><img src={logo} alt=""/> <h3>Provati Sporting Club</h3></div>
        //     <div className="nav">
        //         <ul>
        //             <li><a href="">Home</a></li>
        //             <li><a href="">Our Club</a></li>
        //             <li><a href="">Our Players</a></li>
        //             <li><a href="">Contact Us</a></li>
        //         </ul>
        //     </div> */}
                            
        <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
        <Nav.Link href="Logo"><img src={logo} alt=""/></Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-1">Our Club</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-2">Our Players</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link eventKey="link-3">Contact Us</Nav.Link>
        </Nav.Item>
        </Nav>
        </div>



    );
};

export default Header;