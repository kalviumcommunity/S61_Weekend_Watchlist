/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Movie(props) {
  return (
    <div>
        <h2>Movie Title : {props.title}</h2>
        <h2>Description : {props.description}</h2>
      <h2>Priority : {props.priority}</h2>
    </div>
  )
}

export default Movie;