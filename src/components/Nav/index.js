import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Nav () {
    return (
        <nav>
            <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="About Me" />
                <Tab value="two" label="Projects" />
                <Tab value="three" label="Contact Me" />
                <Tab value="three" label="Resume" />
            </Tabs>
        </nav>
    )
}

export default Nav;