import React from 'react';


const Movie = (props) => {
  return (
    <div id="movie">
      <h1>{props.title}</h1>
      <h2>{props.year}</h2>
      <h3>{props.producer}</h3>
    </div>
  );
}

export default Movie;
