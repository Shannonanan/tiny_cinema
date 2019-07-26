import React, {Component} from 'react';
import './App.css';
import MoviesList from '../components/MoviesList';
import Toolbar from '../components/Toolbar';
import Scroll from '../components/Scroll';

import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';
import BestMoviesFrom from '../components/BestMoviesFrom/BestMoviesFrom';
import MoviesInTheatres from '../components/MoviesInTheatres/MoviesInTheatres';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import PopularMovies from '../components/PopularMovies/PopularMovies';

class App extends Component {
  constructor(){
    super()
  }


  render() {
    return (
        <Router>
        <div >
        <Toolbar/>
         <Switch>
     <Route exact={true} path="/components/PopularMovies" component={PopularMovies}/>
      <Route exact={true} path="/components/BestMoviesFrom" component={BestMoviesFrom}/>
       <Route exact={true} path="/components/MoviesInTheatres" component={MoviesInTheatres}/>
       <Route exact={true} path="/components/MovieDetail/:movieId" component={MovieDetail} />
    </Switch>
          
          </div>
           </Router>
        );
  }
}

export default App;
