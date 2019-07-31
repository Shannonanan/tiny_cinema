import React, {Component} from 'react';
import './MovieReviews.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';
import ReviewList from '../ReviewList';


class MovieReviews extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		movies: [],
		}

    this.movieId = props.match.params.movieId;
	}

	componentDidMount(){
		  fetch(`http://api.themoviedb.org/3/movie/${this.movieId}?api_key=&append_to_response=reviews`)
      .then(response => response.json())
     .then(response => {this.setState({movies: response})});

	}


  render() {
    
    const {movies} = this.state;
    
    return typeof(movies.reviews) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc'>
        <h1>Movie Reviews</h1>
        <Scroll>
       <ReviewList reviews = {movies.reviews.results}/>
       </Scroll>
          
          </div>
        );
  }
  }

export default MovieReviews;


