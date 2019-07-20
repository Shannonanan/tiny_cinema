import React, {Component} from 'react';
import './Toolbar.css';
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';
import BestMoviesFrom from './BestMoviesFrom/BestMoviesFrom';
import MoviesInTheatres from './MoviesInTheatres/MoviesInTheatres'
import App from '../containers/App';


class Toolbar extends Component {

	 constructor(){
    super()
    this.state = {
    }
  }

 myFunction = () => {

 	console.log("clicked");

  // var x = document.getElementById("myTopnav");
  // if (x.classNames === "topnav") {
  //   x.classNames += " responsive";
  // } else {
  //   x.classNames = "topnav";
  // }
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
    </Switch>

</div>  
 </Router>
    );
}   
}

export default Toolbar;

//<nav className="zone blue sticky" id = "myTopnav" >
  //  <ul className="main-nav">
    //  <li className="apples"><a href=""></a>TinyCinema</li>
      //<li className="push" onClick = {this.myFunction}>&#9776;</li>
      //</ul>
        //<div className="push">
   //</div>
     // </nav>
      //<br/>
      //<br/>
      //<br/>
      //<br/>
     // <br/>



