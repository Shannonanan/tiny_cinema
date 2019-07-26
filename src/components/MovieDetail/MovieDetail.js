import React from 'react';
import './MovieDetail.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';

class MovieDetail extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };


     this.movieId = props.match.params.movieId;
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=&language=en-US`)
      .then(response => response.json())
     .then(response => {this.setState({movie: response})});

  }

render() {
    
    const {movie} = this.state;
    console.log(movie);
    return typeof(movie) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc route'>
        <h1>{movie.title}</h1>
        <img alt= 'poster' height="400px" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <p>{movie.overview}</p>
          
          </div>
        );
  }
  }

export default MovieDetail;