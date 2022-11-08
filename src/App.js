import { Router } from '@reach/router';
import './App.css';
import Navbar from './components/navbar/navbar';
import Contact from './pages/contact';
import Despre from './pages/despre';
import Galerie from './pages/galerie';
import Home from './pages/home';
import Pachete from './pages/pachete';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Home path='/' />
        <Despre path='despre-noi' />
        <Galerie path='galerie' />
        <Pachete path='pachete' />
        <Contact path='contact' />
      </Router>
    </div>
  );
}

export default App;
