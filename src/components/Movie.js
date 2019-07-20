import React from 'react';
import './Movie.css';

const Movie = ({id,title,poster_path}) => {
   return(
   	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
   	<img alt= 'poster' height="400px" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
   	<div>
   	<h1 className = "MovieText"> {title}</h1>
   	</div>
   	</div>
   	);
}

export default Movie;