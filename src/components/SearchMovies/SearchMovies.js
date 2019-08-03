import React from 'react'
import './SearchMovies.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';
import SearchBox from '../SearchBox';


class SearchMovies extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		movies: [],
    searchfield: ''
		}
	}

componentDidMount(){
	fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=&language=en-US&page=1`)
	.then(response => response.json())
	.then(response => {this.setState({movies: response.results})})
}

 onSearchChange = (event) => {
      this.setState({searchfield: event.target.value});
   
   if (this.state.searchfield) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=&query=${this.state.searchfield}`)
  .then(response => response.json())
  .then(response => {this.setState({movies: response.results})})
   console.log(this.state.searchfield);
}
        
    }

  movieCallback = (id) => {
     this.props.history.push('./MovieDetail/' + id);
  }

  render() {
      const {movies,searchfield} = this.state;
    
   
    return typeof(movies) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc' >
        <h1>SearchBox</h1> 
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
        <MoviesList movieCallback= { (id) => this.movieCallback(id)} movies={movies}/>
        </Scroll>
          </div>
        );
  }
}
export default SearchMovies;