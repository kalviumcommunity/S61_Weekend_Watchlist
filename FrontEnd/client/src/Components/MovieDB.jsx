// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieDB() {
  const [movies, setMovies] = useState([]);

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

  return (
    <div>
      <h1 className='div'>All Movies</h1>

      {movies.length === 0 ? (
        <p>No movies to display</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <div key={movie._id}>
              <ul key={movie._id}> {/* Add key prop here */}
                <li>
                  <p>Movie Title: {movie.movieTitle}</p>
                  <p>Genre: {movie.genre ? movie.genre.join(', ') : 'N/A'}</p>
                  <p>Release Year: {movie.releaseYear}</p>
                  <p>Director: {movie.director}</p>
                  <p>Main Cast: {movie.mainCast ? movie.mainCast.join(', ') : 'N/A'}</p>
                  <p>IMDb Rating: {movie.imdbRating}</p>
                  <p>Description: {movie.description}</p>
                </li>
              </ul>
            </div>
          ))}
        </ul>
      )}

    </div>
  );
}

export default MovieDB;
