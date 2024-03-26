// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from "react-router-dom";

function AddEntityForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    movieTitle: '',
    genre: '',
    releaseYear: '',
    director: '',
    mainCast: '',
    imdbRating: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add movie');
      }
  
      const data = await response.json();
      console.log('Movie added successfully:', data);
  
      // Reset the form after successful submission
      setFormData({
        movieTitle: '',
        genre: '',
        releaseYear: '',
        director: '',
        mainCast: '',
        imdbRating: '',
        description: ''
      });
      
      navigate('/movies');
        } catch (error) {
      console.error('Error adding movie:', error.message);
    }
  };

  return (
    <>
    <h2 className='text-center m-3'>Add Movie</h2>
    <div className="container">
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Movie Title:</label>
          <input type="text" className="form-control" name="movieTitle" value={formData.movieTitle} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Genre:</label>
          <input type="text" className="form-control" name="genre" value={formData.genre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Release Year:</label>
          <input type="number" className="form-control" name="releaseYear" value={formData.releaseYear} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Director:</label>
          <input type="text" className="form-control" name="director" value={formData.director} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Main Cast:</label>
          <input type="text" className="form-control" name="mainCast" value={formData.mainCast} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">IMDB Rating:</label>
          <input type="number" className="form-control" name="imdbRating" value={formData.imdbRating} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </div>
    </>
  );
}

export default AddEntityForm;
