// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './MovieDB.css';
function MovieDB() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost:3002/api/read')
      .then(response => {
        console.log(response.data.data);
        setMovies(response.data.data)
      })
      .catch(error => {
        console.log('Error fetching movies:', error);
      });
  }, []);
  const handleDelete = (id) => {
    // Implement delete logic here
    axios.delete(`http://localhost:3002/api/delete/${id}`)
      .then(response => {
        // Update entities state after deletion
        setMovies(movies.filter(entity => entity._id !== id));
        console.log('Entity deleted successfully:', response.data);
      })
      .catch(error => {
        console.log('Error deleting entity:', error);
      });
  };

  const handleUpdate = (item) => {
    // console.log(item);
    navigate("/update/:id", { state: item });
  };


  return (
    <div>
      <h1 className='div m-3'>All Movies</h1>

      {movies.length === 0 ? (
        <p>No movies to display</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <div className='container' key={movie._id}>
              <ul key={movie._id}> 
                <li>
                  <p>Movie Title: {movie.movieTitle}</p>
                  <p>Genre: {movie.genre ? movie.genre.join(', ') : 'N/A'}</p>
                  <p>Release Year: {movie.releaseYear}</p>
                  <p>Director: {movie.director}</p>
                  <p>Main Cast: {movie.mainCast ? movie.mainCast.join(', ') : 'N/A'}</p>
                  <p>IMDb Rating: {movie.imdbRating}</p>
                  <p>Description: {movie.description}</p>
                </li>
                <div className="list-item-buttons">
                {/* <Link to={`/update/${movie._id}`}  className='btn m-3'>Update</Link> */}
                <button className="btn m-3" onClick={() => handleUpdate(movie)}>Edit</button>
                <button className="btn m-3" onClick={() => handleDelete(movie._id)}>Delete</button>
                </div>
              </ul>
            </div>
          ))}
        </ul>
      )}

    </div>
  );
}

export default MovieDB;
