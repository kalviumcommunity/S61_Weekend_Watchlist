// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate,useLocation } from 'react-router-dom';

const UpdateUser = () => {
  const location = useLocation();
  const initialData = location.state;
  console.log(initialData);

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData || {
    movieTitle: '',
    genre: '',
    releaseYear: '',
    director: '',
    mainCast: '',
    imdbRating: '',
    description: ''
  });
  
  const handleChange = e => {
    setFormData((prevState) =>({...prevState, [e.target.name]: e.target.value }));
  };
  

  const handleUpdate = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    axios.put(`http://localhost:3002/api/update/${initialData._id}`, formData) // Ensure id is passed correctly
      .then(response => {
        console.log('Entity updated successfully:', response.data);
        navigate('/movies');
      })
      .catch(error => {
        console.log('Error updating entity:', error);
      });
  };
  
  

  return (<>
    <h1 className='m-3 text-center'>UPDATE ENTITY</h1>
    <div className="container">
      <form onSubmit={handleUpdate}>
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
        <button type="submit" className="btn btn-secondary">Update</button>
      </form>
    </div>
    </>
  );
};

export default UpdateUser;