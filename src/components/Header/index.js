import React from 'react';
import Nav from '../Nav';
import logo1 from '../../assets/images/office-workplace.png';

function Header () {
    return (
        <header>
            <Nav></Nav>
            <h1>Malik Spruill</h1>
            {/* <img src={logo1} style={{width: '200px', height: 'auto' }} /> */}
        </header>
    )
}

export default Header;