import React from 'react';

function Footer () {
    return (
        <footer style={{
            position: 'relative',
            top: 100,
            height: 150,
            display: 'flex',
            paddingRight: '20px',
            justifyContent: 'flex-right',
            alignItems: 'flex-end',
            backgroundColor: '#F7CD6E'
        }}>
            <p style={{margin: '0 5px'}}><a href="https://www.github.com/MalikSpruill" target="_blank">Visit My Github!</a></p>
            <p style={{margin: '0 5px'}}><a href="https://www.linkedin.com/in/malik-spruill-develops/" target="_blank">LinkedIn </a></p>
            <p style={{margin: '0 5px'}}><a href="https://stackoverflow.com/users/15796677/malik-spruill" target="_blank">StackOverFlow </a></p>
        </footer>
    )
}

export default Footer;