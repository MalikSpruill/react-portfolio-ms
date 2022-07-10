import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact () {
    return (
        <Box
          component="form"
          sx={{
            width: '50%',
            height: '40%',
            '& > :not(style)': { m: 1, width: '45ch' },
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #F3B99C'
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="malikspruill@gmail.com" color="primary" variant="outlined" />
          <TextField id="outlined-basic" label="252-864-0000" variant="outlined" />
          <TextField id="outlined-basic" label="Will add validation later!" variant="outlined" />
          <Button variant="contained" color="secondary">Submit</Button>
        </Box>
    )
}

export default Contact;