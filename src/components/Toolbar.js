import React, {Component} from 'react';
import './Toolbar.css';
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';
import BestMoviesFrom from './BestMoviesFrom/BestMoviesFrom';
import MoviesInTheatres from './MoviesInTheatres/MoviesInTheatres'
import MovieDetail from './MovieDetail/MovieDetail'
import PopularMovies from './PopularMovies/PopularMovies';


class Toolbar extends Component {

	 constructor(){
    super()
    this.state = {
    }
  }

render(){
   return(
    <div>
 <div className="blue topnav" id="myTopnav">
 <div className="dropdown">
  <button className="dropbtn">&#9776; 
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
    <a href="#" ><Link to="/components/PopularMovies">Most popular</Link></a>
    <a href="#"><Link to="/components/BestMoviesFrom">Best movies from...</Link></a>
    <a href="#"><Link to="/components/MoviesInTheatres">Movies in theatres</Link></a>
  </div>
 </div> 
 <p className="push" id="title" href="" >TinyCinema</p>
</div>
</div>  

    );
}   
}

export default Toolbar;



