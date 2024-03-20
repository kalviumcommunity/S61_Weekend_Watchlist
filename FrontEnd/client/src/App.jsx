// App.js

import './App.css';
import Home from './Components/Home';
import Movie from './Components/Movie';
import { Routes, Route } from 'react-router-dom';

const dummyData = {
  title: "Inception",
  description: "A mind-bending sci-fi thriller directed by Christopher Nolan.",
  priority: "High"
};


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie {...dummyData} />} /> 
    </Routes>
  );
}

export default App;
