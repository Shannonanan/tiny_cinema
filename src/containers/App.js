import React, {Component} from 'react';
import './App.css';
import MoviesList from '../components/MoviesList';
import Toolbar from '../components/Toolbar';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor(){
    super()
    this.state = {
    movies: [],
    }
  }

  componentDidMount(){
  fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=')
      .then(response => response.json())
     .then(response => {this.setState({movies: response.results})});
  }


  render() {
    const {movies} = this.state;
    
    return typeof(movies) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc'>
        <h1>Most Popular movies</h1>
        <Scroll>
        <MoviesList movies={movies}/>
        </Scroll>
          
          </div>
        );
  }
}

export default App;
