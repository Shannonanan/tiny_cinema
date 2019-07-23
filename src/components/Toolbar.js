import React, {Component} from 'react';
import './Toolbar.css';
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';
import BestMoviesFrom from './BestMoviesFrom/BestMoviesFrom';
import MoviesInTheatres from './MoviesInTheatres/MoviesInTheatres'
import MovieDetail from './MovieDetail/MovieDetail'
import App from '../containers/App';


class Toolbar extends Component {

	 constructor(){
    super()
    this.state = {
    }
  }

render(){
   return(
    <Router>
    <div>
 <div className="blue topnav" id="myTopnav">
 <div className="dropdown">
  <button className="dropbtn">&#9776; 
    <i className="fa fa-caret-down"></i>
  </button>
  <div className="dropdown-content">
    <a href="#" ><Link to="/containers">Most popular</Link></a>
    <a href="#"><Link to="/components/BestMoviesFrom">Best movies from...</Link></a>
    <a href="#"><Link to="/components/MoviesInTheatres">Movies in theatres</Link></a>
  </div>
 </div> 
 <p className="push" id="title" href="" >TinyCinema</p>
</div>

 <Switch>
     <Route exact={true} path="/containers" component={App}/>
      <Route exact={true} path="/components/BestMoviesFrom" component={BestMoviesFrom}/>
       <Route exact={true} path="/components/MoviesInTheatres" component={MoviesInTheatres}/>
       <Route exact={true} path="/components/MovieDetail/:movieId" component={MovieDetail} />
    </Switch>

</div>  
 </Router>
    );
}   
}

export default Toolbar;



