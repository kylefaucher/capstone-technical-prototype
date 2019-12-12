import React, { Component }from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Feed from './Feed.js'
import Write from './Write.js'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <Router>
        <div className="container">
          <h2>Social Network</h2>
          <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <ul className='navbar-nav'>
              <li className = 'navbar-item'><Link to="/" className="nav-link">Feed</Link></li>
              <li className = 'navbar-item'><Link to="/create" className="nav-link">Write a post</Link></li>
            </ul>
          </nav>

          <Route path="/" exact component={Feed} />
          <Route path="/create" component={Write} />

        </div>
      </Router>
      );
  }
}

export default App;
