import { Router } from '@reach/router';
import './App.css';
import { Whatsap } from './components/whatsap/whatsap';
import Contact from './pages/contact';
import Despre from './pages/despre';
import Galerie from './pages/galerie';
import Home from './pages/home';
import Pachete from './pages/pachete';

function App() {


  return (
    <div className='App'>
      <Whatsap />

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
