import React, {Component} from 'react';
import './PopularMovies.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';

class PopularMovies extends Component {
  constructor(props){
    super(props)
    this.state = {
    movies: [],
    }
    
  
  }

  componentDidMount(){
  fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=')
      .then(response => response.json())
     .then(response => {this.setState({movies: response.results})});
  }

  movieCallback = (id) => {
     this.props.history.push('./MovieDetail/' + id);
  }


  render() {
    const {movies} = this.state;
    
    return typeof(movies) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc'>
        <h1>Most Popular movies</h1>
        <Scroll>
        <MoviesList movieCallback= { (id) => this.movieCallback(id)} movies={movies}/>
        </Scroll>
          
          </div>
        );
  }
}

export default PopularMovies;
