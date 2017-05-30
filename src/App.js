import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import WatchlistContainer from './components/WatchlistContainer'
import AllWatchlists from './components/AllWatchlists'
import WatchlistShow from './components/WatchlistShow'
// import SearchForm
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
//
export default () => {
    return (
        <div>
          <Switch>
            <Route path='/watchlists' component={WatchlistContainer} />
            <Route exact path='/about' render={() => <h1>This is the about page</h1>}/>
          </Switch>
         </div>
   );
}


