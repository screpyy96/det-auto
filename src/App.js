import { Router } from '@reach/router';
import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { Whatsap } from './components/whatsap/whatsap';
import Contact from './pages/contact';
import Despre from './pages/despre';
import Galerie from './pages/galerie';
import Home from './pages/home';
import Pachete from './pages/pachete';

function App() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className='App'>
      <Whatsap />
      <Navbar
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
      <Router>
        <Home path='/' />
        <Despre path='/despre' />
        <Pachete path='/servicii' />
        <Galerie path='/galerie' />
        <Contact path='/contact' />
      </Router>
    </div>
  );
}

export default App;
