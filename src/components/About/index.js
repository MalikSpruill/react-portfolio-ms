import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function About () {
    return (
        <section>
            <Avatar alt="Malik Spruill" 
            src={require('../../assets/images/malik.jpg')} 
            sx={{ width: 150, height: 150, margin: '0 auto' }}
            />
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '20px',
                justifyContent: 'center'
            }}
            >
                <Paper elevation={8}
                sx={{
                    height: 250,
                    width: 250,
                    margin: '0 10px',
                    padding: 2,
                    bgcolor: '#FFF3DB',
                    lineHeight: 1.5,
                }}>
                    <h4>About - 1</h4>
                    <p>My name is Malik Spruill. I'm from North Carolina, and continue to reside here.
                        Ever since I've began programming, I have been interested in learning more about 
                        things people need in life.
                    </p>
                </Paper>
                <Paper elevation={8}
                sx={{
                    height: 250,
                    width: 250,
                    margin: '0 10px',
                    padding: 2,
                    bgcolor: '#CBEBC3',
                    lineHeight: 1.5
                }}>
                    <h4>About - 2</h4>
                    <p>This is when I discovered a niche with being a contributor to issues needing to be tackled on 
                        as well as being able to stretch my creative muscles when it comes to programming.
                     </p>
                </Paper>
                <Paper elevation={8}
                sx={{
                    height: 250,
                    width: 250,
                    margin: '0 10px',
                    padding: 2,
                    bgcolor: '#ADD7DB',
                    lineHeight: 1.5
                }}>
                    <h4>About - 3</h4>
                    <p>Having the opportunity to work both frontend and backend, using frameworks like react and
                        databases like MongoDB with express middleware, I've been able to create multiple projects.
                     </p>
                </Paper>
            </Box>

        </section>
    )
}

export default About;