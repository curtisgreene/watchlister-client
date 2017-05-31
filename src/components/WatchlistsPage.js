// Receive a Watchlist as a prop,
// reach out to the API to find movies that are on that Watchlist based on the join table,
// Render out a list of all the movies using the Movie-Card component
// eventually something like this: this.state.movies.map( movie => <MovieCard movie={movie}/> )

import { Link, Switch, Route } from 'react-router-dom'
import React from 'react'
import WatchlistShow from './WatchlistShow'
import CreateList from './CreateList'
import WatchlistEdit from './WatchlistEdit'
import SearchForm from './SearchForm'
import MovieList from './MovieList'

export default function WatchlistsPage(props) {
  const watchlistElements = props.watchlists.map((li,i) =>
      <li key={li.id}><Link to={`/watchlists/${li.id}`}><h1>{li.name}</h1></Link></li>)

   if (props.watchlists){
    return(
    <div>
      <div className="col-md-4">
        <CreateList handleCreateList={props.handleCreateList} />
        <h3>All Watchlists</h3>
        <ul>
          { watchlistElements }
        </ul>
      </div>
      <div className="col-md-8">
        <Switch>
          <Route exact path="/watchlists/search"
                render={()=>
            <div>
              <SearchForm handleSearch={props.handleSearch}
                          handleChange={props.handleChange} />
              <MovieList watchlists={props.watchlists}
                        movieResults={props.movieResults}
                        handleAddMovie={props.handleAddMovie}/>
            </div>}
          />
          <Route exact path="/watchlists/:id" render={ ({match}) => {
            const watchlist = props.watchlists.find(watchlist => watchlist.id === parseInt(match.params.id))
            return <WatchlistShow onDelete={props.handleDelete} watchlist={watchlist}/>
          } }/>
          <Route exact path="/watchlists/:id/edit" render={ ({match}) => {
            const watchlist = props.watchlists.find(watchlist => watchlist.id === parseInt(match.params.id))
            return <WatchlistEdit handleUpdateWatchlist={props.handleUpdateWatchlist} watchlist={watchlist} />
          } }/>
        </Switch>
      </div>
    </div>
    )
  } else
    return <div><h1>LOADING.....</h1></div>
  }