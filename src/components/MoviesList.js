import React from 'react';
import Movie from './Movie';


const MoviesList = (props) => {
	return(
		<div>
		{
			props.movies.map((movie, i) => {
				return(
					<div key = {[i]} onClick={ () => props.movieCallback(movie.id)} className='tc bg-black dib br3 pa2 ma2 bw8 shadow-5' >
					<Movie 
					key = {props.movies[i].title}
					id = {props.movies[i].title}
					title ={movie.title}
					poster_path ={movie.poster_path}
					/>
					</div>
				);
    		})
		}
		</div>
		);
	}
	
export default MoviesList;