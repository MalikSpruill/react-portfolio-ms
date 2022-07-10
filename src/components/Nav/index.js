import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useState} from 'react';


function Nav ({setSelectedPage}) {
    const [value, setValue] = useState('one');

    // const showContent = event => {
    //     let tab = event.target.value;

    //     switch (tab) {
    //         case 'about' : setSelectedPage('about');
    //         break;
    //         case 'projects' : setSelectedPage('projects');
    //         break;
    //         case 'contact' : setSelectedPage('contact');
    //         break;
    //         case 'resume' : setSelectedPage('resume');
    //         break;
    //         default: 'about'
    //     }
    //     return;
    // }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <nav>
            <Box sx={{ 
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end'
                }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="about" label="About Me" onClick={() => setSelectedPage('about')}/>
                    <Tab value="projects" label="Projects" onClick={() => setSelectedPage('project')}/>
                    <Tab value="contact" label="Contact Me" onClick={() => setSelectedPage('contact')} /> 
                    <Tab value="resume" label="Resume" onClick={() => setSelectedPage('resume')} />
                </Tabs>
            </Box>
        </nav>
    )
}

export default Nav;