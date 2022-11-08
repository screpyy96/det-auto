import { Router } from '@reach/router';
import './App.css';
import Navbar from './components/navbar/navbar';
import Despre from './pages/despre';
import Home from './pages/home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Home path='/' />
        <Despre path='despre-noi' />
      </Router>
    </div>
  );
}

export default App;
