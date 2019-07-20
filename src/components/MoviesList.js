import React from 'react';
import Movie from './Movie';


const MoviesList = ({movies}) => {
	return(
		<div>
		{
			movies.map((movie, i) => {
				return(
			<Movie 
					key = {movies[i].title}
					id = {movies[i].title}
					title ={movie.title}
					poster_path ={movie.poster_path}
					/>
				);
    		})
		}
		</div>
		);
	}

export default MoviesList;