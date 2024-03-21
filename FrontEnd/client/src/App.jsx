// App.js

import './App.css';
import MovieDB from './Components/MovieDB';
// import Home from './Components/Home';
// import Movie from './Components/Movie';
// import { Routes, Route,Link } from 'react-router-dom';

// const dummyData = {
//   title: "Inception",
//   description: "A mind-bending sci-fi thriller directed by Christopher Nolan.",
//   priority: "High"
// };


function App() {
 return(
  <>
  <MovieDB />
  </>
 )

//   return (
//     <>
//     <nav className='navigation-bar'>
//       <ul className='nav-options'>
//      <li><Link to='/'>HOME</Link></li> 
//      <li> <Link to='/movie'>MOVIES WATCHLIST</Link></li>
//       </ul>
//     </nav>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movie" element={<Movie {...dummyData} />} /> 
//     </Routes>
// <table>
//   <thead>
//     <tr>
//       <th>Movie Title</th>
//       <th>Release Year</th>
//     </tr>
//   </thead>
//   <tbody>
//   {
//   users.map((user, index) => {
//     return (
//       <tr key={index}>
//         <td>{user.title}</td>
//       </tr>
//     );
//   })
// } 
//   </tbody>
// </table>
//     </>
//   );
}

export default App;
