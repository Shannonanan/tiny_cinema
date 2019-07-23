import React from 'react';
import Movie from './Movie';
import LinkButton from './LinkButton.js'
import { Route, Link,Switch} from 'react-router-dom';
import MovieDetail from './MovieDetail/MovieDetail'


const MoviesList = ({movies}) => {
	return(
		<div>
		{
			movies.map((movie, i) => {
				return(
					<LinkButton key = {[i]} to={'./MovieDetail/' + movie.id} className='tc bg-black dib br3 pa2 ma2 bw8 shadow-5' >
					<Movie 
					key = {movies[i].title}
					id = {movies[i].title}
					title ={movie.title}
					poster_path ={movie.poster_path}
					/>
					</LinkButton>
				);
    		})
		}
		</div>
		);
	}
		
export default MoviesList;