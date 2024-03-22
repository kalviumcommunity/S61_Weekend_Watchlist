import MovieDB from './Components/MovieDB';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
// import Movie from './Components/Movie';
import { Routes, Route,Link } from 'react-router-dom';
import AddEntityForm from './Components/AddEntityForm'; // Import the new component
import './App.css';
// const dummyData = {
//   title: "Inception",
//   description: "A mind-bending sci-fi thriller directed by Christopher Nolan.",
//   priority: "High"
// };


function App() {
  return (
    <>
    <nav className='navigation-bar'>
      <ul className='nav-options p-4'>
     <li><Link to='/'>HOME</Link></li> 
     {/* <li> <Link to='/movie'>MOVIES WATCHLIST</Link></li> */}
     <li> <Link to='/movies'>MOVIESWATCHLIST</Link></li>
     <li><Link to='/add-entity'>ADD ENTITY</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/movie" element={<Movie {...dummyData} />} />  */}
      <Route path='/movies' element={<MovieDB />} />
      <Route path='/add-entity' element={<AddEntityForm />} />
    </Routes>
    {/* <MovieDB /> */}
    </>
  );
}

export default App;
