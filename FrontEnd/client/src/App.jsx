import MovieDB from './Components/MovieDB';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import { Routes, Route,Link } from 'react-router-dom';
import AddEntityForm from './Components/AddEntityForm'; // Import the new component
import './App.css';
import UpdateUser from './Components/UpdateUser';



function App() {
  return (
    <>
    <div className='navigation-bar'>
      <ul className='nav-options p-4'>
     <li><Link to='/'>HOME</Link></li> 
     <li> <Link to='/movies'>MOVIESWATCHLIST</Link></li>
     <li><Link to='/add-entity'>ADD ENTITY</Link></li>
    </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/movies' element={<MovieDB />} />
      <Route path='/add-entity' element={<AddEntityForm />} />
      <Route path='/update/:id' element={<UpdateUser />} />
    </Routes>
    </>
  );
}

export default App;
