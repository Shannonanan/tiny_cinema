import React, {Component} from 'react';
import './MovieReviews.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';


class MovieReviews extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		movies: [],
		}
	}

	componentDidMount(){
		  fetch(`http://api.themoviedb.org/3/movie/420818?api_key=&append_to_response=reviews`)
      .then(response => response.json())
     .then(response => {this.setState({movie: response})});

	}


  render() {
    
    const {movies} = this.state;
    
    return typeof(movies) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc'>
        <h1>Movies Reviews</h1>
        <Scroll>
       <p>test review</p>
        </Scroll>
          
          </div>
        );
  }
  }

export default MovieReviews;


