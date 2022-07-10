import React from 'react';
import Nav from '../Nav';
import logo1 from '../../assets/images/office-workplace.png';



function Header ({selectedPage, setSelectedPage}) {
    const capitalizeSubtitle = subtitle => {
        return subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
    }

    return (
        <header>
            <Nav 
            setSelectedPage={setSelectedPage}
            sx={{
                justifySelf: 'flex-end'
            }}></Nav>
            <h1
            style={{
                fontSize: '2.5rem',
                color: '#F1CF98'
            }}>Malik Spruill</h1>
            <h2>| Full-Stack Developer | Open for Collab |</h2>
            <h3
            style={{
                fontSize: '2.3rem',
                color: '#A7C1EB',
                textAlign: 'right',
                marginRight: '30px'
            }}>{capitalizeSubtitle(selectedPage)}</h3>
            {/* <img src={logo1} style={{width: '200px', height: 'auto' }} /> */}
        </header>
    )
}

export default Header;