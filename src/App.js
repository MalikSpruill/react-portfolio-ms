import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const [selectedPage, setSelectedPage] = useState('about');

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      <div>
      
        <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {selectedPage === 'about' && <About />}
        {selectedPage === 'project' && <Project />}
        {selectedPage === 'contact' && <Contact />}
        {selectedPage === 'resume' && <Resume />}
        <Button variant="contained" color="secondary">Hello</Button>
        {/* <Footer /> */}
  
      </div>
    </ThemeProvider>
  )
}

export default App;
