import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [selectedPage, setSelectedPage] = useState('about');

  return (
    <div>
       <Header />
       <About />
       <Project />
       <Contact />
       <Resume />
    </div>
  )
}

export default App;
