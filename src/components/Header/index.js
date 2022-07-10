import React from 'react';
import Nav from '../Nav';
import logo1 from '../../assets/images/office-workplace.png';



function Header ({selectedPage, setSelectedPage}) {
    const capitalizeSubtitle = subtitle => {
        return subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
    }

    return (
        <header>
            <Nav setSelectedPage={setSelectedPage}></Nav>
            <h1>Malik Spruill</h1>
            <h2>{capitalizeSubtitle(selectedPage)}</h2>
            {/* <img src={logo1} style={{width: '200px', height: 'auto' }} /> */}
        </header>
    )
}

export default Header;