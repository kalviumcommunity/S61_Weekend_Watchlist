// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
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
  

  useEffect(() => {
    // Fetch existing entity data
    axios.get(`http://localhost:3002/api//${id}`)
      .then(response => {
        // Set the form data state with the existing entity data
        setFormData(response.data);

      })
      .catch(error => {
        console.log('Error fetching entity:', error);
      });
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3002/api/update/${id}`, formData)
      .then(response => {
        console.log('Entity updated successfully:', response.data);
        navigate('/movies');

        // Redirect or perform any other action after successful update
      })
      .catch(error => {
        console.log('Error updating entity:', error);
      });
  };

  return (
    <div className="form-container">
      <h1 className='m-3'>UPDATE ENTITY</h1>
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
  );
};

export default UpdateUser;