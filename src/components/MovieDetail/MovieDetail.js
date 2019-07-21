import React, {Component} from 'react';
import './MovieDetail.css';
import MoviesList from '../MoviesList';
import Toolbar from '../Toolbar';
import Scroll from '../Scroll';

  
class MovieDetail extends React.Component {
  constructor(){
    super()
    this.state = {
    movies: [],
    }
  }

componentDidMount(){
  console.log("i am heeeere");
}

  render() {
      const {movies} = this.state;
    console.log("i am heeeere");
    return typeof(movies) == 'undefined' ?
        <h1>Loading...</h1> :
       (
        <div className = 'tc' >
        <h1>Movie Details..</h1> 

          </div>
        );
  }
}
export default MovieDetail;
