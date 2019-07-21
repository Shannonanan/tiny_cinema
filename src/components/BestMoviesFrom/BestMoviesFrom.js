import React from 'react'
import './BestMoviesFrom.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';


class BestMoviesFrom extends React.Component {
	constructor(){
		super()
		this.state = {
		movies: [],
		}
	}

componentDidMount(){
	fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=2015&sort_by=vote_average.desc&&api_key=&language=en-US')
	.then(response => response.json())
	.then(response => {this.setState({movies: response.results})})
}

  render() {
      const {movies} = this.state;
    
    return typeof(movies) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc' >
        <h1>Best Movies From...</h1> 
        <Scroll>
        <MoviesList movies={movies}/>
        </Scroll>
          </div>
        );
  }
}
export default BestMoviesFrom;