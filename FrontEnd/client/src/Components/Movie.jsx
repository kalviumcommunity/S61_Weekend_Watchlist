// eslint-disable-next-line no-unused-vars
import React from 'react'

function Movie(props) {
  return (
    <div>
        <h1>Movie Title : {props.title}</h1>
        <h1>Description : {props.description}</h1>
      <h1>Priority : {props.priority}</h1>
    </div>
  )
}

export default Movie;