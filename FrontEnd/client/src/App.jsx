// App.js

import './App.css';
import Home from './Components/Home';
import Movie from './Components/Movie';
import { Routes, Route,Link } from 'react-router-dom';

const dummyData = {
  title: "Inception",
  description: "A mind-bending sci-fi thriller directed by Christopher Nolan.",
  priority: "High"
};


function App() {
  return (
    <>
    <nav className='navigation-bar'>
      <ul className='nav-options'>
     <li><a><Link to='/'>HOME</Link></a></li> 
     <li> <a><Link to='/movie'>MOVIES WATCHLIST</Link></a></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie {...dummyData} />} /> 
    </Routes>
    </>
  );
}

export default App;
