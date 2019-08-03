import React, {Component} from 'react';
import './App.css';
import MoviesList from '../components/MoviesList';
import Toolbar from '../components/Toolbar';
import Scroll from '../components/Scroll';

import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import MoviesInTheatres from '../components/MoviesInTheatres/MoviesInTheatres';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import MovieReviews from '../components/MovieReviews/MovieReviews';
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
      <Route exact={true} path="/components/SearchMovies" component={SearchMovies}/>
       <Route exact={true} path="/components/MoviesInTheatres" component={MoviesInTheatres}/>
       <Route exact={true} path="/components/MovieDetail/:movieId" component={MovieDetail} />
       <Route exact={true} path="/components/MovieReviews/:movieId" component={MovieReviews} />
    </Switch>
          
          </div>
           </Router>
        );
  }
}

export default App;
