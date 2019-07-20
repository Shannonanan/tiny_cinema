import React, {Component} from 'react';
import './MoviesInTheatres.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';


class MoviesInTheatres extends React.Component {
	constructor(){
		super()
		this.state = {
		movies: [],
		}
	}

	componentDidMount(){
		fetch('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-06-01&primary_release_date.lte=2019-10-01&&api_key=')
      .then(response => response.json())
     .then(response => {this.setState({movies: response.results})});

	}

  render() {
    
    const {movies} = this.state;
    
    return typeof(movies) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc'>
        <h1>Movies In Theatres</h1>
        <Scroll>
        <MoviesList movies={movies}/>
        </Scroll>
          
          </div>
        );
  }
  }

export default MoviesInTheatres;


