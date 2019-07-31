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
      trailerId: ""
    };


     this.movieId = props.match.params.movieId;
  }

  componentWillMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=&append_to_response=videos`)
      .then(response => response.json())
     .then(response => {this.setState({movie: response})});

  }


    showReviews= (movieId) => { 
    this.props.history.push('../MovieReviews/' + movieId);
  }
  

render() {
     
    const {movie} = this.state;
    const trailer = '';
    
    return typeof(movie.videos) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc route'>
        <h1>{movie.title}</h1>
        <img alt= 'poster' height="400px" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <p>{movie.overview}</p>
       <button onClick={() => this.showReviews(movie.id)} >reviews</button>
         <button> <a href= {`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}>trailer</a></button>
          </div>
        );
  }
  }

export default MovieDetail;